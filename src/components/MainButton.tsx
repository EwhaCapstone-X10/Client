import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../models/navigation.model';

type ButtonProps = {
  text: string;
  nav: keyof RootStackParamList;
  isAbled: boolean;
  onClick: () => void;
};

const MainButton = (props: ButtonProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handlePress = () => {
    navigation.navigate(props.nav);
    props.onClick();
  };

  return (
    <View className="custom-view">
      <TouchableOpacity
        className="items-center w-full py-4 rounded-xl bg-primary_500 disabled:bg-gray-200"
        onPress={handlePress}
        disabled={props.isAbled}
      >
        <Text className="text-white font-SemiBold text-lg">{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
