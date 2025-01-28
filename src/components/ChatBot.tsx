import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';
import { generatePrompt } from '../utils/generatePrompt';
import { driverInfo } from '../utils/driverInfo';
import { ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';
type Message = {
  role: 'user' | 'bot';
  content: string;
};

const ChatBot = () => {
  const API_KEY = OPENAI_API_KEY;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sleepyKeyword = '졸려';
  const quitKeyword = '종료';

  const sleepyPrompt = '졸려? 근처 졸음 쉼터 안내해줄까? 라고 말해줘';
  const quitPrompt = '대화 종료할게. 안전 운전해! 라고 말해줘';

  const botFunc = (response: any) => {
    const botMessage: Message = {
      role: 'bot',
      content: response.data.choices[0].message.content,
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  // 시작 메세지 생성
  const handleStartConversation = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: [
            {
              role: 'user',
              content: '오늘 기분 어때? 어디 가는 길이야? 라고 말해줘',
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      botFunc(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 특정 단어 감지 시 대답 지정
  const detectResponse = async (message: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: [
            {
              role: 'user',
              content: message,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      botFunc(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 음성 대화
  const handleChat = async () => {
    if (!userInput.trim()) return;
    const newMessage: Message = { role: 'user', content: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput('');

    // 졸음 관련 키워드 확인 및 함수 호출
    if (newMessage.content.includes(sleepyKeyword)) {
      detectResponse(sleepyPrompt); // 키워드 감지 시 detectResponse 함수 호출
      return; // 실행 후 함수 종료
    }

    // 종료 키워드 확인 및 함수 호출
    if (newMessage.content.includes(quitKeyword)) {
      await detectResponse(quitPrompt); // 키워드 감지 시 detectResponse 함수 호출

      setTimeout(() => {
        navigation.navigate('EndChat');
      }, 1500);

      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: generatePrompt(driverInfo),
            },
            { role: 'user', content: userInput },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      botFunc(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      {messages.map((message, index) => (
        <View
          key={index}
          style={[styles.messageBubble, message.role === 'user' ? styles.userBubble : styles.botBubble]}
        >
          <Text style={styles.messageText}>{message.content}</Text>
        </View>
      ))}

      <TextInput style={styles.input} placeholder="Type your message" value={userInput} onChangeText={setUserInput} />
      <Button title="대화 시작" onPress={handleStartConversation} disabled={loading} />
      <Button title="입력" onPress={handleChat} disabled={loading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#d3f8e2',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
});

export default ChatBot;
