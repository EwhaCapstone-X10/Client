import React from 'react';
import { Image, Text, View } from 'react-native';
import KakaoButton from '../components/KakaoButton';

const Entry = () => {
  return (
    <View className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Image className="w-80 h-64" source={require('../assets/images/speech_bubble.png')} />
        <View className="custom-view gap-4">
          <Text className="custom-title">졸음 감지 및 맞춤형 AI 대화</Text>
          <Text className="custom-description">DriveMate와 함께 안전 운전을 시작하세요 !</Text>
        </View>
      </View>
      <KakaoButton text="카카오로 계속하기" nav="FormName" onClick={() => {}} />
    </View>
  );
};

export default Entry;
