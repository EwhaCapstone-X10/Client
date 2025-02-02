import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, ScrollView } from "react-native";
import axios from "axios";
import { router } from "expo-router";
import * as ExpoStt from "@crossplatformkorea/expo-stt";
import * as Speech from "expo-speech";
import { generatePrompt } from "@/utils/generatePrompt";
import { driverInfo } from "@/utils/driverInfo";
import { OPENAI_API_KEY } from "@env";

type Message = {
  role: "user" | "bot";
  content: string;
};

const Ex = () => {
  const API_KEY = OPENAI_API_KEY;

  const [messages, setMessages] = useState<Message[]>([]);
  const [spokenText, setSpokenText] = useState("");
  const [loading, setLoading] = useState(false);
  const [recognizing, setRecognizing] = useState(false);

  const sleepyKeyword = "졸려";
  const quitKeyword = "종료";

  const sleepyPrompt = "졸려? 스트레칭 알려줄까? 라고 말해줘";
  const quitPrompt = "대화 종료할게. 안전 운전해! 라고 말해줘";

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
              content: "오늘 기분 어때? 어디 가는 길이야? 라고 말해줘",
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

    // 졸음, 종료 단어 감지
    if (message.includes(sleepyKeyword)) {
      await detectResponse(sleepyPrompt);
      return;
    }
    if (message.includes(quitKeyword)) {
      await detectResponse(quitPrompt);
      setTimeout(() => router.push("endchat"), 5000);
      return;
    }

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
  };

  // 졸음, 종료 단어 감지
  const detectResponse = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [{ role: "user", content: prompt }],
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

  // 사용자 음성 인식 시작
  const startSpeechRecognition = () => {
    try {
      setRecognizing(true);
      ExpoStt.startSpeech();
    } catch (err) {
      console.error("Speech recognition failed:", err);
    }
  };

  useEffect(() => {
    const onSpeechResult = ExpoStt.addOnSpeechResultListener((result: any) => {
      if (result?.results?.length) {
        const userSpeech = result.results.join(" ");
        setSpokenText(userSpeech);
        handleChat(userSpeech);
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

export default Ex;
