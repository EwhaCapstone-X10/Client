import React from 'react';
import { Text, View } from 'react-native';
import FormInput from '../components/FormInput';
import MainButton from '../components/MainButton';

const JobForm = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">직업을 입력해주세요</Text>
        <Text className="custom-description">필수 입력은 아닙니다 !</Text>
      </View>
      <View className="flex-1 w-full px-7 py-6 gap-4">
        <FormInput title="직업" keyboardType="default" />
      </View>
      <MainButton text="완료" nav="Main" />
    </View>
  );
};

export default JobForm;
