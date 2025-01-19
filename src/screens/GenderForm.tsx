import React from 'react';
import { Text, View } from 'react-native';
import GenderButton from '../components/GenderButton';
import MainButton from '../components/MainButton';

const GenderForm = () => {
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">성별을 선택해주세요</Text>
        <Text className="custom-description">더욱 개인화 된 서비스를 제공해드립니다</Text>
      </View>
      <View className="flex-1 w-full px-7 py-6">
        <Text className="custom-inputinfo">성별</Text>
        <View className="flex-row w-full justify-center gap-5 py-3">
          <GenderButton text="남성" />
          <GenderButton text="여성" />
        </View>
      </View>
      <MainButton text="다음" nav="JobForm" />
    </View>
  );
};

export default GenderForm;
