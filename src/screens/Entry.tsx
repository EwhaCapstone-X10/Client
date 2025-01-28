import React from 'react';
import { Image, Text, View } from 'react-native';
import CommonStyles from '../styles/CommonStyles';
import KakaoBtn from '../components/KakaoBtn';

const Entry = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            width: 320,
            height: 240,
          }}
          source={require('../assets/images/speech_bubble.png')}
        />
        <View style={[CommonStyles.view, { gap: 12 }]}>
          <Text style={CommonStyles.title}>졸음 감지 및 맞춤형 AI 대화</Text>
          <Text style={CommonStyles.description}>DriveMate와 함께 안전운전을 시작하세요 !</Text>
        </View>
      </View>
      <KakaoBtn text="카카오로 계속하기" nav="FormName" onClick={() => {}} />
    </View>
  );
};

export default Entry;
