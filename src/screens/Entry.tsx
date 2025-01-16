import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';
import MainButton from '../components/MainButton';

const Entry = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 gap-20">
      <View className="flex-1 justify-end items-center">
        <Image className="w-72 h-44" source={require('../assets/images/speech_bubble.png')} />
      </View>
      <View className="custom-view gap-4">
        <Text className="custom-title">졸음 감지 및 맞춤형 AI 대화</Text>
        <Text className="custom-description">DriveMate와 함께 안전 운전을 시작하세요 !</Text>
      </View>
      <MainButton text="시작하기" nav="BasicInformation" />
    </View>
  );
};

export default Entry;
