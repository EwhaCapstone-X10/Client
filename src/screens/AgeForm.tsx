import React from 'react';
import { Text, View, TextInput } from 'react-native';
import MainButton from '../components/MainButton';
import { useState } from 'react';

const AgeForm = () => {
  const [age, onChangeAge] = useState('');
  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };
  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">나이를 입력해주세요</Text>
        <Text className="custom-description">숫자만 입력해주세요</Text>
      </View>
      <View className="flex-1 left-view gap-1">
        <Text className="custom-inputinfo">나이</Text>
        <TextInput className="custom-input" onChangeText={onChangeAge} value={age} keyboardType="number-pad" />
      </View>
      <MainButton text="다음" nav="GenderForm" onClick={handleNext} isAbled={!age} />
    </View>
  );
};

export default AgeForm;
