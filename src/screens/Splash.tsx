import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../models/navigation.model';

const Splash = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>Splash</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
        <Text>Go to Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
