import React from 'react';
import { Image, Text, View } from 'react-native';
import MainButton from '../components/MainButton';

const EndChat = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">대화가 종료되었습니다 {'\n'}다음에 또 만나요 !</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image className="w-72 h-44" source={require('../assets/images/flag.png')} />
      </View>
      <MainButton text="메인화면으로 이동" nav="Main" onClick={() => {}} isAbled={false} />
    </View>
  );
};

export default EndChat;
