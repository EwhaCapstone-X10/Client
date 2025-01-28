import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Tts from 'react-native-tts';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Main = () => {
  return (
    <View className="flex-1">
      <Header left="" title="drivemate" />
      <View className="left-view gap-10 flex-1">
        <Text className="custom-title">
          <Text style={{ color: '#3182F6' }}>개인 맞춤형 대화</Text>
          {'를 통해\n'}
          졸음 운전을 예방해보세요
        </Text>

        <TouchableOpacity
          onPress={() =>
            Tts.speak('테스트', {
              androidParams: {
                KEY_PARAM_PAN: 0, // 스테레오 위치 (좌측 -1~1)
                KEY_PARAM_VOLUME: 1, // 볼륨 (0-1)
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
              },
              rate: 1.0, // 음성 속도 (기본: 1.0)
              iosVoiceId: 'com.apple.ttsbundle.Samantha-compact', // iOS 음성 설정
            })
          }
        >
          <Text>테스트용</Text>
        </TouchableOpacity>
      </View>
      <NavBar type={'home'} />
    </View>
  );
};

export default Main;
