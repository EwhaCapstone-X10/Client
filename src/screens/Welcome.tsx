import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';

const Welcome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
      }}
    >
      <Image style={{ width: 240, height: 240 }} source={require('../assets/images/clap.png')} />
      <Text
        style={{
          fontFamily: 'Pretendard-Bold',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        안수이님 환영해요 !
      </Text>
    </View>
  );
};

export default Welcome;
