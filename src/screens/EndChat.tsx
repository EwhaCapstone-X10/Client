import React from 'react';
import { Image, Text, View } from 'react-native';
import MainBtn from '../components/MainBtn';
import CommonStyles from '../styles/CommonStyles';

const EndChat = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={[CommonStyles.leftview, { paddingVertical: 40 }]}>
        <Text
          style={[
            CommonStyles.title,
            {
              lineHeight: 40,
            },
          ]}
        >
          대화가 종료되었습니다 {'\n'}다음에 또 만나요 !
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 160,
          }}
          source={require('../assets/images/flag.png')}
        />
      </View>
      <MainBtn text="메인화면으로 이동" nav="Main" onClick={() => {}} isAbled={false} />
    </View>
  );
};

export default EndChat;
