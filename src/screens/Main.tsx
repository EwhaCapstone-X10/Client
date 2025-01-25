import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, DeviceEventEmitter, Linking, AppState, BackHandler } from 'react-native';
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
import backgroundServer from 'react-native-background-actions';
import Tts from 'react-native-tts';

const Main = () => {
  const date = getDate();

  useEffect(() => {
    // 플로팅 버튼 권한 부여 및 초기화
    requestPermission()
      .then(() => console.log('permission Granted'))
      .catch(() => console.log('permission is not granted'));

    initialize().then(() => console.log('bubble 초기화'));
  }, []);

  // 백그라운드 - 음성 대화
  const startBackChat = async () => {
    const task = async () => {
      console.log('음성 대화 시작');
      while (backgroundServer.isRunning()) {
        // 음성 대화 코드 추가
        console.log('음성 대화 중');
        await new Promise((res) => setTimeout(res, 3000)); // 예시: 3초 대기
      }
    };

    const options = {
      taskName: 'drivemate',
      taskTitle: 'Chatting Active',
      taskDesc: '대화 중입니다.',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff5733',
      linkingURI: 'drivemate://EndChat',
    };

    try {
      await backgroundServer.start(task, options);
      console.log('bg 작업 성공');
    } catch (err) {
      console.error('bg 작업 실패', err);
    }
  };

  // 대화 시작하기 버튼 눌렀을 때
  const handleStart = () => {
    showFloatingBubble(800, 1500).then(() => console.log('bubble added'));

    // bg 대화 시작
    startBackChat();

    // 앱을 bg로 이동
    AppState.currentState === 'active' && Linking.openURL('drivemate://background');
    BackHandler.exitApp();
  };

  // bubble 눌렀을 때
  DeviceEventEmitter.addListener('floating-bubble-press', (e) => {
    Linking.openURL('drivemate://EndChat');

    hideFloatingBubble().then(() => console.log('bubble 삭제'));

    backgroundServer.stop().then(() => console.log('bg 작업 중단'));
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
      <TouchableOpacity
        onPress={() =>
          Tts.speak('안녕하세요 테스트입니다.', {
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

      <NavBar type="홈" />
    </View>
  );
};

export default Main;
