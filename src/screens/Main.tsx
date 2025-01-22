import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, DeviceEventEmitter } from 'react-native';
import LookupButton from '../components/LookupButton';
import Header from '../components/Header';
import getDate from '../utils/getDate';
import NavBar from '../components/NavBar';
import {
  hideFloatingBubble,
  initialize,
  requestPermission,
  showFloatingBubble,
} from 'react-native-floating-bubble-plugin';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';

const Main = () => {
  const date = getDate();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    requestPermission()
      .then(() => console.log('Permission Granted'))
      .catch(() => console.log('Permission is not granted'));

    initialize().then(() => console.log('Initialized the bubble'));
  }, []);

  // 대화 시작하기 버튼 눌렀을 때
  const handleStart = async () => {
    await showFloatingBubble(800, 1500).then(() => console.log('Floating Bubble Added'));
  };

  // 플로팅 버튼 눌렀을 때
  DeviceEventEmitter.addListener('floating-bubble-press', (e) => {
    navigation.navigate('EndChat');

    hideFloatingBubble().then(() => console.log('Floating Bubble Removed'));
    console.log('Press Bubble');
  });

  return (
    <View className="flex-1">
      <Header left={date} title="" right="drivemate" />
      <View className="left-view gap-10 flex-1">
        <Text className="custom-title">개인 맞춤형 대화를 통해 {'\n'}졸음 운전을 예방해보세요</Text>
        <TouchableOpacity
          className="flex-row items-center gap-3 w-full px-6 py-7 rounded-xl bg-primary_300"
          onPress={handleStart}
        >
          <Image source={require('../assets/images/play.png')} className="w-7 h-7" />
          <Text className="text-white font-SemiBold text-2xl">대화 시작하기</Text>
        </TouchableOpacity>

        <View>
          <Text className="font-SemiBold text-lg py-2">졸음 운전 예방 Tip</Text>
          <LookupButton
            first="졸음이 올 땐"
            second="스트레칭 영상"
            nav="StretchingList"
            img={require('../assets/images/youtube.png')}
          />
        </View>
      </View>

      <NavBar type="홈" />
    </View>
  );
};

export default Main;
