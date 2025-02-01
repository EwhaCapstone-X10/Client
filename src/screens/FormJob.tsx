import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import Header from '../components/Header';
import MainBtn from '../components/MainBtn';
import CommonStyles from '../styles/CommonStyles';

const FormJob = () => {
  const [job, onChangeJob] = useState('');
  const [focus, setFocus] = useState(false);
  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="drivemate" />
      <View
        style={[
          CommonStyles.leftview,
          {
            gap: 12,
          },
        ]}
      >
        <Text style={CommonStyles.title}>직업을 입력해주세요</Text>
        <Text style={CommonStyles.description}>필수 입력은 아닙니다</Text>
      </View>
      <View
        style={[
          CommonStyles.leftview,
          {
            flex: 1,
          },
        ]}
      >
        <Text style={CommonStyles.inputinfo}>직업</Text>
        <TextInput
          onChangeText={onChangeJob}
          value={job}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[CommonStyles.input, focus && { borderBottomColor: '#5299FF' }]}
        />
      </View>
      <MainBtn text="다음" nav="FormHobby" onClick={handleNext} isAbled={false} />
    </View>
  );
};

export default FormJob;
