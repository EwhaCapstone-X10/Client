import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios, { CancelTokenSource } from "axios";
import { router } from "expo-router";
import * as Speech from "expo-speech";
import { generatePrompt } from "@/utils/generatePrompt";
import { OPENAI_API_KEY } from "@env";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { Chat } from "@/models/chatting.model";
import useChatStore from "@/store/chatStore";
import { postChatting } from "@/api/chat.api";
import { StatusBar } from "expo-status-bar";
import Custom from "@/styles/Custom";
import Header from "@/components/Header";
import ChatStyle from "@/styles/ChatStyle";
import { getUserInfo } from "@/api/user.api";
import { User } from "@/models/user.model";

const whisperEndpoint = "https://api.openai.com/v1/audio/transcriptions";
const AIEndPoint = "http://192.168.219.101:8000/predict";

const VoiceChat = () => {
  const { chat, setChat } = useChatStore();
  const [messages, setMessages] = useState<Chat[]>([]); // gpt, user 메시지
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState(""); // user가 방금 말한 메시지
  const [loading, setLoading] = useState(false); // 대화 로딩중
  const willSendRef = useRef(true);
  const isQuittingRef = useRef(false); // 종료 중인지 확인
  const playbackObject = useRef<Audio.Sound | null>(null); // 알람/tts 재생 객체
  const axiosSourceRef = useRef<CancelTokenSource | null>(null); // Axios 요청 취소
  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 소리 없을 때 타이머

  const [driverInfo, setDriverInfo] = useState<User>();

  const storeMessage = (role: "user" | "gpt", message: string) => {
    setMessages((prevMessages) => {
      const newIdx =
        prevMessages.length > 0
          ? prevMessages[prevMessages.length - 1].idx + 1
          : 0; // 마지막 idx + 1, 없으면 0
      const newMessage: Chat = {
        idx: newIdx,
        role: role,
        chat: message,
      };
      return [...prevMessages, newMessage];
    });
  };

  // 챗봇 대화 가져오기 - tts - 사용자 음성인식
  const botFunc = (response: any) => {
    if (isQuittingRef.current) return; // 종료 중이면 동작하지 않음

    setMessages((prevMessages) => {
      const newIdx =
        prevMessages.length > 0
          ? prevMessages[prevMessages.length - 1].idx + 1
          : 0; // 마지막 idx + 1, 메시지가 없으면 0
      const botMessage: Chat = {
        idx: newIdx,
        role: "gpt",
        chat: response.data.choices[0].message.content,
      };

      // 챗봇 대화 TTS
      Speech.speak(botMessage.chat, {
        language: "ko",
        rate: 1.6,
        onDone: () => {
          startRecording()
            .then(() => {})
            .catch((error) => {
              console.error("녹음 시작 실패:", error);
            });
        },
      });

      return [...prevMessages, botMessage];
    });
  };

  // 사용자 음성 녹음
  const startRecording = async () => {
    try {
      // 녹음 권한 요청
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        alert("녹음 권한이 필요합니다.");
        return;
      }

      // 기존 녹음 객체가 있으면 정리
      if (recording) {
        const status = await recording.getStatusAsync();
        if (status.isRecording || status.canRecord) {
          await recording.stopAndUnloadAsync();
        }
      }

      const newRecording = new Audio.Recording();
      await newRecording.prepareToRecordAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      await newRecording.startAsync(); // 안정적으로 시작
      setRecording(newRecording);
      setIsRecording(true);
    } catch (error) {
      console.error("녹음 실패:", error);
    }
  };

  // 사용자 녹음 종료
  const stopRecording = async () => {
    try {
      if (recording) {
        setIsRecording(false);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        setRecording(null);

        await transcribeAudio(uri);
      }
    } catch (error) {
      console.error("녹음 종료 실패:", error);
    }
  };

  const transcribeAudio = async (uri: string) => {
    if (isQuittingRef.current) return; // 종료 중이면 동작하지 않음

    try {
      const response = await FileSystem.uploadAsync(whisperEndpoint, uri, {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "file",
        mimeType: "audio/mpeg",
        parameters: {
          model: "whisper-1",
        },
      });

      const sleepRes = await FileSystem.uploadAsync(AIEndPoint, uri, {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "file",
        mimeType: "audio/mpeg",
      });

      const result = JSON.parse(sleepRes.body);
      console.log(result);

      if (result.yawn || result.sleepy) {
        setLoading(true);
        willSendRef.current = false;

        await playAlarm();
        setLoading(false); // 종료되었으므로 로딩 상태 해제
        return;
      }
      const parsedResponse = JSON.parse(response.body);
      const transcribedText = parsedResponse.text;

      if (transcribedText && willSendRef.current) {
        setSpokenText(transcribedText);
        handleChat(transcribedText);
      } else if (transcribedText && !willSendRef.current) {
        if (
          transcribedText.includes("응") ||
          transcribedText.includes("좋아") ||
          transcribedText.includes("알려줘")
        ) {
          storeMessage("user", transcribedText);
          introduceStretching();
        } else {
          storeMessage("user", transcribedText);
          handleStartConversation(generatePrompt(driverInfo));
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 대화 시작
  const handleStartConversation = async (prompt: string) => {
    setLoading(true);
    willSendRef.current = true;

    const source = axios.CancelToken.source();
    axiosSourceRef.current = source;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          cancelToken: source.token,
        }
      );
      botFunc(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 대화 stt
  const handleChat = async (message: string) => {
    const source = axios.CancelToken.source();
    axiosSourceRef.current = source;

    setLoading(true);

    // 새로운 사용자 메시지 저장
    storeMessage("user", message);

    // 졸음 단어 감지
    if (message.includes("졸려")) {
      setLoading(true);
      willSendRef.current = false;

      await playAlarm();
      setLoading(false); // 종료되었으므로 로딩 상태 해제
      return;
    }
    // 종료 단어 감지
    if (message.includes("종료")) {
      await detectQuit();
      setLoading(false); // 종료되었으므로 로딩 상태 해제
      return;
    }

    // 둘 다 아닐 때
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: generatePrompt(driverInfo),
            },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          cancelToken: source.token,
        }
      );

      botFunc(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  // 종료 단어 감지
  const detectQuit = async () => {
    setLoading(true);
    willSendRef.current = false;

    storeMessage("gpt", "대화 종료할게 안전 운전해.");

    Speech.speak("대화 종료할게 안전 운전해.", {
      language: "ko",
      onDone: () => {
        handleQuit();
      },
    });
  };

  // 스트레칭 물어보기
  const askStretching = async () => {
    if (isQuittingRef.current) return; // 종료 중이면 동작하지 않음

    setLoading(true);
    willSendRef.current = false;

    storeMessage("gpt", "간단한 스트레칭 알려줄까?");

    Speech.speak("간단한 스트레칭 알려줄까?", {
      language: "ko",
      onDone: sleepyResponse,
    });
  };

  const introduceStretching = async () => {
    if (isQuittingRef.current) return; // 종료 중이면 동작하지 않음

    setLoading(true);
    willSendRef.current = false;

    storeMessage(
      "gpt",
      "어깨를 으쓱 올렸다 내리면서 굳은 근육을 풀어줘. 잠 깼어?"
    );

    Speech.speak("어깨를 으쓱 올렸다 내리면서 굳은 근육을 풀어줘. 잠 깼어?", {
      language: "ko",
      onDone: () => {
        startRecording();
      },
    });
  };

  // 스트레칭 물어봤을 때 대답듣기
  const sleepyResponse = () => {
    try {
      setIsRecording(true);
      startRecording();
    } catch (err) {
      console.error("Speech recognition failed:", err);
    } finally {
      setIsRecording(false);
    }
  };

  const playAlarm = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sounds/alarm.mp3")
      );

      playbackObject.current = sound;
      await sound.playAsync();

      willSendRef.current = true;
      setTimeout(() => {
        askStretching();
      }, 10000);
    } catch (error) {
      console.error("Failed to load and play sound", error);
    }
  };

  const handleQuit = async () => {
    try {
      const res = await postChatting(chat);
      console.log(res);
      if (res.status === 200) {
        router.push("endchat");
      }
    } catch (err: any) {
      if (err.response.status === 400 || err.response.status === 500) {
        console.log("error: ", err.response.data.error);
      } else {
        console.log(err);
      }
    }

    isQuittingRef.current = true;

    // 챗봇 음성 중단
    Speech.stop();

    // 알람 재생 중단
    if (playbackObject.current) {
      await playbackObject.current.stopAsync();
      await playbackObject.current.unloadAsync();
      playbackObject.current = null;
    }

    if (recording) {
      setIsRecording(false);
      await recording.stopAndUnloadAsync();
    }

    // Axios 요청 중단
    if (axiosSourceRef.current) {
      axiosSourceRef.current.cancel("User quit the session.");
    }

    // 상태 초기화
    setLoading(false);
    willSendRef.current = false;

    // 페이지 이동
    router.push("endchat");
  };

  useEffect(() => {
    if (!recording) return;

    const timeoutId = setTimeout(() => {
      stopRecording(); // 6초 후 자동 종료
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [recording]);

  useEffect(() => {
    setChat(messages);
    console.log(chat);
  }, [messages]);

  useEffect(() => {
    axiosSourceRef.current = null;
    setMessages([]);

    setLoading(true);
    willSendRef.current = true;

    const source = axios.CancelToken.source();
    axiosSourceRef.current = source;

    const startMSG = async () => {
      try {
        const res = await getUserInfo();
        const data = res.data.result;
        setDriverInfo(data);

        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: generatePrompt(driverInfo),
              },
              {
                role: "user",
                content:
                  "'오늘 기분 어때? 어디 가는 길이야?' 라고 그대로 말해줘",
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
            cancelToken: source.token,
          }
        );
        botFunc(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    startMSG();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" />

      <Header left="" title="개인 맞춤형 대화" style="header" />

      <View style={Custom.leftview}>
        <Text style={Custom.title_m}>대화 목록</Text>

        <View style={{ height: 550 }}>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  ChatStyle.chatview,
                  {
                    justifyContent:
                      message.role === "user" ? "flex-end" : "flex-start",
                  },
                ]}
              >
                <Text
                  style={[
                    ChatStyle.bubble,
                    {
                      backgroundColor:
                        message.role === "user" ? "#988BFD" : "#EDEDEC",
                      color: message.role === "user" ? "white" : "black",
                    },
                  ]}
                >
                  {message.chat}
                </Text>
              </View>
            ))}

            {isRecording && (
              <Text style={styles.listeningText}>Listening...</Text>
            )}
          </ScrollView>
        </View>

        <TouchableOpacity onPress={handleQuit}>
          <Text style={styles.quitbtn}>대화 종료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },

  listeningText: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
    fontStyle: "italic",
  },

  quitbtn: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
    backgroundColor: "#FF6666",
    color: "white",
    paddingVertical: 12,
    borderRadius: 12,
    textAlign: "center",
    width: "100%",
  },
});

export default VoiceChat;
