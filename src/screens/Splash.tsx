import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary_500 text-5xl font-Bold text-center">Drive Mate</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
        <Text className="text-2xl">Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text className="text-2xl">Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EndChat')}>
        <Text className="text-2xl">EndChat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NameForm')}>
        <Text className="text-2xl">NameForm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
