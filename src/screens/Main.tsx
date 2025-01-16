import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import LookupButton from '../components/LookupButton';

const Main = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-10">
        <Text className="custom-title">개인 맞춤형 대화를 통해 {'\n'}졸음 운전을 예방해보세요</Text>
        <TouchableOpacity className="w-full px-5 py-6 rounded-xl bg-primary_400">
          <Text className="text-white font-SemiBold text-xl">▶ 대화 시작하기</Text>
        </TouchableOpacity>

        <View>
          <Text className="font-SemiBold text-base py-2">졸음 운전 예방 Tip</Text>
          <LookupButton
            first="졸음이 올 땐"
            second="스트레칭 영상"
            nav="StretchingList"
            img={require('../assets/images/youtube.png')}
          />
          <LookupButton
            first="신나는"
            second="추천 플레이리스트"
            nav="Splash" // 추후 수정
            img={require('../assets/images/list.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Main;
