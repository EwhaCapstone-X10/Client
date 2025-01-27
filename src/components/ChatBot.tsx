import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import axios from 'axios';

const ChatBot = () => {
  const [userMsg, setUserMsg] = useState('');
  const [botMsg, setBotMsg] = useState('');

  const sendMsg = async () => {
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{role: 'user', content: userMsg}],
        },
        {
          headers: {
            // Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      // 응답에서 choices 배열을 처리하여 bot의 답변을 가져옵니다
      setBotMsg(res.data.choices[0].message.content); // 'choices[0].message.content'는 잘못된 부분, 수정됨
    } catch (err) {
      console.error('Error:', err);
      setBotMsg('An error occurred. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Type your message"
        value={userMsg}
        onChangeText={setUserMsg}
      />
      <Button title="Send" onPress={sendMsg} />
      <Text>{botMsg}</Text>
    </View>
  );
};

export default ChatBot;
