import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import MainButton from '../components/MainButton';

const FormName = () => {
  const [name, onChangeName] = useState('');
  const [focus, setFocus] = useState(false);
  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };

  return (
    <View className="flex-1">
      <View className="left-view gap-3">
        <Text className="custom-title">이름을 입력해주세요</Text>
        <Text className="custom-description">대화 시 불릴 이름을 알려주세요</Text>
      </View>
      <View className="flex-1 left-view gap-1">
        <Text className="custom-inputinfo">이름</Text>
        <TextInput
          className={'custom-input'}
          onChangeText={onChangeName}
          value={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[focus && { borderBottomColor: '#3370FF' }]}
        />
      </View>
      <MainButton text="다음" nav="FormAge" onClick={handleNext} isAbled={!name} />
    </View>
  );
};

export default FormName;
