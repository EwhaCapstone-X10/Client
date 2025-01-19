import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import MainButton from './MainButton';
import { RootStackParamList } from '../models/navigation.model';

type FormProps = {
  title: string;
  keyboardType: KeyboardTypeOptions;
};

const FormInput = (props: FormProps) => {
  const [info, setInfo] = useState('');
  // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장

  return (
    <View className="w-full">
      <Text className="custom-inputinfo">{props.title}</Text>
      <TextInput className="custom-input" keyboardType={props.keyboardType} onChangeText={setInfo} value={info} />
    </View>
  );
};

export default FormInput;
