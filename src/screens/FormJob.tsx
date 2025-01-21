import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import MainButton from '../components/MainButton';
import Header from '../components/Header';

const FormJob = () => {
  const [job, onChangeJob] = useState('');
  const [focus, setFocus] = useState(false);

  const handleSubmit = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };
  return (
    <View className="flex-1">
      <Header left="<-" title="" right="drivemate" />
      <View className="left-view gap-3">
        <Text className="custom-title">직업을 입력해주세요</Text>
        <Text className="custom-description">필수 입력은 아닙니다 !</Text>
      </View>
      <View className="flex-1 left-view gap-1">
        <Text className="custom-inputinfo">직업</Text>
        <TextInput
          className="custom-input"
          onChangeText={onChangeJob}
          value={job}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[focus && { borderBottomColor: '#5299FF' }]}
        />
      </View>
      <MainButton text="완료" nav="Main" onClick={handleSubmit} isAbled={false} />
    </View>
  );
};

export default FormJob;
