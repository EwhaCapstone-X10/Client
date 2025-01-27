import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../models/navigation.model';

type ButtonProps = {
  text: string;
  nav: keyof RootStackParamList;
  onClick: () => void;
};

const KakaoButton = (props: ButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate(props.nav);
    props.onClick();
  };

  return (
    <View className="custom-view gap-3">
      <TouchableOpacity
        className="flex flex-row items-center justify-center w-full gap-3 py-4 rounded-xl bg-kakao"
        onPress={handlePress}>
        <Image
          className="w-4 h-4"
          source={require('../assets/images/kakao.png')}
        />
        <Text className="font-SemiBold text-base">{props.text}</Text>
      </TouchableOpacity>
      <Text className="custom-description">⚡3초만에 빠른 회원가입</Text>
    </View>
  );
};

export default KakaoButton;
