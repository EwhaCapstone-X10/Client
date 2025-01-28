import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  /*useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Entry');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  */

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'Jalnan2TTF',
          color: '#3182F6',
          fontSize: 40,
          textAlign: 'center',
        }}
      >
        drivemate
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
        <Text>Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StretchingList')}>
        <Text>StretchingList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
