import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const ChatBot = () => {
  const API_KEY = OPENAI_API_KEY;
  const [userMsg, setUserMsg] = useState('');
  const [botMsg, setBotMsg] = useState('');

  const sendMsg = async () => {
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userMsg }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );
      setBotMsg(res.data.choices[0].message.content);
    } catch (err) {
      console.error('Error:', err);
      setBotMsg('An error occurred. Please try again.');
    }
  };

  return (
    <View>
      <TextInput placeholder="Type your message" value={userMsg} onChangeText={setUserMsg} />
      <Button title="Send" onPress={sendMsg} />
      <Text>{botMsg}</Text>
    </View>
  );
};

export default ChatBot;
