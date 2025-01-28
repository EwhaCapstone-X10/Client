import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';
import CommonStyles from '../styles/CommonStyles';

type ButtonProps = {
  text: string;
  nav: keyof RootStackParamList;
  onClick: () => void;
};

const KakaoBtn = (props: ButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate(props.nav);
    props.onClick();
  };

  return (
    <View style={CommonStyles.view}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 12,
          paddingVertical: 12,
          borderRadius: 12,
          backgroundColor: '#FFF175',
        }}
        onPress={handlePress}
      >
        <Image
          style={{
            width: 16,
            height: 16,
          }}
          source={require('../assets/images/kakao.png')}
        />
        <Text
          style={{
            fontFamily: 'Pretendard-SemiBold',
            fontSize: 12,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
      <Text style={CommonStyles.description}>⚡3초만에 빠른 회원가입</Text>
    </View>
  );
};

export default KakaoBtn;
