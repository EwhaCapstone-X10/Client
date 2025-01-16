import React from 'react';
import { Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import GenderButton from '../components/GenderButton';
import FormInput from '../components/FormInput';

const InfoForm = () => {
  return (
    <View className="flex-1">
      <View className="left-view">
        <Text className="custom-title">직업과 성별을 알려주세요</Text>
      </View>
      <View className="flex-1 w-full px-6 py-6 gap-4">
        <FormInput title="직업" keyboardType="default" />
        <View className="w-full">
          <Text className="custom-inputinfo">*성별</Text>
          <View className="flex-row w-full justify-center gap-5 py-3">
            <GenderButton text="남성" />
            <GenderButton text="여성" />
          </View>
        </View>
      </View>
      <MainButton text="완료" nav="Main" />
    </View>
  );
};

export default InfoForm;
