import React from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';

type FormProps = {
  title: string;
  keyboardType: KeyboardTypeOptions;
};

const FormInput = (props: FormProps) => {
  return (
    <View className="w-full">
      <Text className="custom-inputinfo">{props.title}</Text>
      <TextInput className="custom-input" keyboardType={props.keyboardType} />
    </View>
  );
};

export default FormInput;
