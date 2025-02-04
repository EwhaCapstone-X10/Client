import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Button, Text, ScrollView } from "react-native";
import axios from "axios";
import { router } from "expo-router";
import * as ExpoStt from "@crossplatformkorea/expo-stt";
import * as Speech from "expo-speech";
import { generatePrompt } from "@/utils/generatePrompt";
import { driverInfo } from "@/utils/driverInfo";
import { OPENAI_API_KEY } from "@env";
import { useAudioPlayer } from "expo-audio";

const audioSource = require("../assets/sounds/alarm.mp3");

type Message = {
  role: "user" | "bot";
  content: string;
};
const API_KEY = OPENAI_API_KEY;

const VoiceChat = () => {
  const player = useAudioPlayer(audioSource);

  const [messages, setMessages] = useState<Message[]>([]); // gpt, user 메시지
  const [spokenText, setSpokenText] = useState(""); // user가 방금 말한 메시지
  const [loading, setLoading] = useState(false); // 대화 로딩중
  const [recognizing, setRecognizing] = useState(false); // 음성 인식중
  const willSendRef = useRef(true);

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
      onDone: startSpeechRecognition,
    });
  };

  // 사용자 음성 인식 시작
  const startSpeechRecognition = () => {
    try {
      setRecognizing(true);
      willSendRef.current = true;
      ExpoStt.startSpeech();
    } catch (err) {
      console.error("Speech recognition failed:", err);
    }
  };

  // 대화 시작
  const handleStartConversation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: "Just say '오늘 기분 어때? 어디 가는 길이야?'",
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
      setRecognizing(true);

      ExpoStt.startSpeech();
    } catch (err) {
      console.error("Speech recognition failed:", err);
    } finally {
      setRecognizing(false);
    }
  };

  const playAlarm = () => {
    try {
      player.play(); // 알람 소리 재생

      setTimeout(() => {
        Speech.speak("대화 종료할게. 근처에 차를 주차하고 쉬어.", {
          language: "ko",
          onDone: () => router.push("endchat"),
        });
      }, 10000);
    } catch (error) {
      console.error("Failed to load and play sound", error);
    }
  };

  useEffect(() => {
    const onSpeechResult = ExpoStt.addOnSpeechResultListener((result: any) => {
      console.log(willSendRef);

      if (result?.results?.length && willSendRef.current) {
        const userSpeech = result.results.join(" ");
        setSpokenText(userSpeech);
        handleChat(userSpeech);
      } else if (result?.results?.length && !willSendRef.current) {
        const sleepyres = result.results.join(" ");
        if (
          sleepyres.includes("응") ||
          sleepyres.includes("네") ||
          sleepyres.includes("맞아")
        ) {
          playAlarm();
          return;
        } else if (
          sleepyres.includes("아니") ||
          sleepyres.includes("괜찮아") ||
          sleepyres.includes("아냐")
        ) {
          Speech.speak("알겠어. 우리 무슨 얘기 하고 있었지?", {
            language: "ko",
            onDone: startSpeechRecognition,
          });
        }
      }
    });

    const onSpeechEnd = ExpoStt.addOnSpeechEndListener(() => {
      setRecognizing(false);
    });

    const onSpeechError = ExpoStt.addOnSpeechErrorListener((error: any) => {
      console.error("Speech recognition error:", error);
      setRecognizing(false);
    });

    return () => {
      onSpeechResult.remove();
      onSpeechEnd.remove();
      onSpeechError.remove();
    };
  }, []);

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
        onPress={handleStartConversation}
        disabled={loading || recognizing}
      />
      <Button title="종료" onPress={() => router.push("endchat")} />
      {recognizing && <Text style={styles.listeningText}>Listening...</Text>}
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
