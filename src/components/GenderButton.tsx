import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  text: string;
};

const GenderButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity className="items-center px-20 py-2.5 rounded-lg border-2 border-gray-200">
      <Text className="font-Medium text-base">{props.text}</Text>
    </TouchableOpacity>
  );
};

export default GenderButton;
