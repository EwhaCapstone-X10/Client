import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MainBtn from '../components/MainBtn';
import Header from '../components/Header';
import CommonStyles from '../styles/CommonStyles';
import { Gender } from '../models/user.model';
import GenderBtn from '../components/GenderBtn';

const FormGender = () => {
  const [genders, setGenders] = useState([
    { id: 0, type: '남성', isClicked: false },
    { id: 1, type: '여성', isClicked: false },
  ]);

  const [modes, setModes] = useState<Gender[]>([
    { id: 0, type: '반말', isClicked: false },
    { id: 1, type: '존댓말', isClicked: false },
  ]);

  const [btnDisbled, setBtnDisabled] = useState(true);

  const onClickGender = (id: number) => {
    setGenders(
      genders.map((gender) => (gender.id === id ? { ...gender, isClicked: true } : { ...gender, isClicked: false })),
    );
  };

  const onClickMode = (id: number) => {
    setModes(modes.map((mode) => (mode.id === id ? { ...mode, isClicked: true } : { ...mode, isClicked: false })));
  };

  useEffect(() => {
    const isClickedGender = genders.some((gender) => gender.isClicked);
    const isClickedMode = modes.some((mode) => mode.isClicked);
    setBtnDisabled(!(isClickedGender && isClickedMode));
  }, [[genders, modes]]);

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
        <Text style={CommonStyles.title}>성별 및 대화모드를 선택해주세요</Text>
        <Text style={CommonStyles.description}>더욱 개인화 된 서비스를 제공해드립니다</Text>
      </View>
      <View
        style={[
          CommonStyles.leftview,
          {
            flex: 1,
          },
        ]}
      >
        <Text style={CommonStyles.inputinfo}>성별</Text>
        <GenderBtn genders={genders} onClick={onClickGender} />

        <Text style={CommonStyles.inputinfo}>대화 모드</Text>
        <GenderBtn genders={modes} onClick={onClickMode} />
      </View>
      <MainBtn text="다음" nav="FormJob" onClick={handleNext} isAbled={btnDisbled} />
    </View>
  );
};

export default FormGender;
