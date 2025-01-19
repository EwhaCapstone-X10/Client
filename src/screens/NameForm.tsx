import React from 'react';
import { Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import FormInput from '../components/FormInput';

const NameForm = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">이름을 입력해주세요</Text>
        <Text className="custom-description">대화 시 불릴 이름을 알려주세요</Text>
      </View>
      <View className="flex-1 w-full px-7 py-6 gap-4">
        <FormInput title="이름" keyboardType="default" />
      </View>
      <MainButton text="다음" nav="AgeForm" />
    </View>
  );
};

export default NameForm;
