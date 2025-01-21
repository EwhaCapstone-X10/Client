import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LookupButton from '../components/LookupButton';
import Header from '../components/Header';
import getDate from '../utils/getDate';
import NavBar from '../components/NavBar';

const Main = () => {
  const date = getDate();
  return (
    <View className="flex-1">
      <Header left={date} title="" right="drivemate" />
      <View className="left-view gap-10 flex-1">
        <Text className="custom-title">개인 맞춤형 대화를 통해 {'\n'}졸음 운전을 예방해보세요</Text>
        <TouchableOpacity className="flex-row items-center gap-5 w-full px-6 py-7 rounded-xl bg-primary_300">
          <Image source={require('../assets/images/play.png')} className="w-4 h-4" />
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
