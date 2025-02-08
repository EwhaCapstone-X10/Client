import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Button, Text, ScrollView } from "react-native";
import axios from "axios";
import { router } from "expo-router";
import * as Speech from "expo-speech";
import { generatePrompt } from "@/utils/generatePrompt";
import { driverInfo } from "@/utils/driverInfo";
import { OPENAI_API_KEY } from "@env";
import { useAudioPlayer } from "expo-audio";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const audioSource = require("../assets/sounds/alarm.mp3");

type Message = {
  role: "user" | "bot";
  content: string;
};
const API_KEY = OPENAI_API_KEY;
const whisperEndpoint = "https://api.openai.com/v1/audio/transcriptions";

const start = "Just say '오늘 기분 어때? 어디 가는 길이야?' ";

const VoiceChat = () => {
  const player = useAudioPlayer(audioSource);

  const [messages, setMessages] = useState<Message[]>([]); // gpt, user 메시지
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [spokenText, setSpokenText] = useState(""); // user가 방금 말한 메시지
  const [loading, setLoading] = useState(false); // 대화 로딩중
  const willSendRef = useRef(true);

  const silenceTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 소리 없을 때 타이머

  // 챗봇 대화 가져오기 - tts - 사용자 음성인식
  const botFunc = (response: any) => {
    const botMessage: Message = {
      role: "bot",
      content: response.data.choices[0].message.content,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);

    // 챗봇 대화 tts
    Speech.speak(botMessage.content, {
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
  };

  // 사용자 음성 녹음
  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        alert("녹음 권한이 필요합니다.");
        return;
      }

      setIsRecording(true);
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
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
        console.log("녹음 완료:", uri);
        setRecording(null);

        await transcribeAudio(uri);
      }
    } catch (error) {
      console.error("녹음 종료 실패:", error);
    }
  };

  const transcribeAudio = async (uri: string) => {
    try {
      const response = await FileSystem.uploadAsync(whisperEndpoint, uri, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
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

      const parsedResponse = JSON.parse(response.body);
      const transcribedText = parsedResponse.text;

      console.log("Transcribed Text:", transcribedText);

      if (transcribedText && willSendRef.current) {
        setSpokenText(transcribedText);
        handleChat(transcribedText);
      } else if (transcribedText && !willSendRef.current) {
        if (
          transcribedText.includes("응") ||
          transcribedText.includes("네") ||
          transcribedText.includes("맞아")
        ) {
          playAlarm();
          return;
        } else if (
          transcribedText.includes("아니") ||
          transcribedText.includes("괜찮아") ||
          transcribedText.includes("아냐")
        ) {
          handleStartConversation(generatePrompt(driverInfo));
        }
      }
    } catch (error) {
      console.error("Whisper API Error:", error);
    }
  };

  // 대화 시작
  const handleStartConversation = async (prompt: string) => {
    setLoading(true);
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
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
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
    setLoading(true);
    const newMessage: Message = { role: "user", content: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // 졸음 단어 감지
    if (message.includes("졸려")) {
      await detectSleepy();
      return;
      // 종료 단어 감지
    } else if (message.includes("종료")) {
      await detectQuit();
      return;
      // 둘 다 아닐 때
    } else {
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
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        botFunc(response);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  // 종료 단어 감지
  const detectQuit = async () => {
    setLoading(true);
    Speech.speak("대화 종료할게 안전 운전해.", {
      language: "ko",
      onDone: () => router.push("endchat"),
    });
  };

  // 졸려 단어 감지
  const detectSleepy = async () => {
    setLoading(true);
    willSendRef.current = false;

    Speech.speak("졸려? 큰 알람소리 들려줄까?", {
      language: "ko",
      onDone: sleepyResponse,
    });
  };

  // 졸리다고 물어봤을 때 대답듣기
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

  const playAlarm = () => {
    try {
      player.play(); // 알람 소리 재생
      willSendRef.current = true;
      setTimeout(() => {
        handleStartConversation(generatePrompt(driverInfo));
      }, 10000);
    } catch (error) {
      console.error("Failed to load and play sound", error);
    }
  };

  useEffect(() => {
    // 소리가 없으면 녹음 종료
    if (!recording) return;

    const intervalID = setInterval(async () => {
      const status = await recording.getStatusAsync();
      console.log("Metering level:", status.metering); // Check the metering level

      // 소리가 -120보다 작으면 타이머 시작
      if (status.metering < -90) {
        if (!silenceTimeoutRef.current) {
          silenceTimeoutRef.current = setTimeout(() => {
            stopRecording();
          }, 1500); // 2초동안 말 안하면 녹음 종료
        }
      } else {
        // 소리가 감지되면 타이머 리셋
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
          silenceTimeoutRef.current = null;
        }
      }
    }, 500);

    return () => {
      clearInterval(intervalID);
      if (silenceTimeoutRef.current) {
        clearTimeout(silenceTimeoutRef.current);
      }
    };
  }, [recording]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {messages.map((message, index) => (
        <View
          key={index}
          style={[
            styles.messageBubble,
            message.role === "user" ? styles.userBubble : styles.botBubble,
          ]}
        >
          <Text style={styles.messageText}>{message.content}</Text>
        </View>
      ))}

      <Button
        title="대화 시작"
        onPress={() => handleStartConversation(start)}
        disabled={loading || isRecording}
      />
      <Button title="종료" onPress={() => router.push("endchat")} />
      {isRecording && <Text style={styles.listeningText}>Listening...</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "80%",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#d3f8e2",
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
  },
  messageText: {
    fontSize: 14,
    color: "#333",
  },
  listeningText: {
    fontSize: 16,
    color: "blue",
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default VoiceChat;
