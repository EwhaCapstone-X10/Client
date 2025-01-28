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
    <View className="flex-1 justify-center items-center ">
      <Text className="text-primary_400 text-4xl font-Logo text-center leading-tight">drivemate</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
        <Text>Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StretchingList')}>
        <Text>StretchingList</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EndChat')}>
        <Text>EndChat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
