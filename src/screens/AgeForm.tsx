import React from 'react';
import { Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import FormInput from '../components/FormInput';

const AgeForm = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">나이를 입력해주세요</Text>
        <Text className="custom-description">숫자만 입력해주세요</Text>
      </View>
      <View className="flex-1 w-full px-7 py-6 gap-4">
        <FormInput title="*나이" keyboardType="number-pad" />
      </View>
      <MainButton text="다음" nav="InfoForm" />
    </View>
  );
};

export default AgeForm;
