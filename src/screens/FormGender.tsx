import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import Header from '../components/Header';
import { Gender } from '../models/user.model';
import GenderButton from '../components/GenderButton';

const FormGender = () => {
  const [genders, setGenders] = useState<Gender[]>([
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
    <View className="flex-1">
      <Header left="<-" title="drivemate" />
      <View className="left-view gap-3">
        <Text className="custom-title">성별을 선택해주세요</Text>
        <Text className="custom-description">더욱 개인화 된 서비스를 제공해드립니다</Text>
      </View>

      <View className="left-view gap-1">
        <Text className="custom-inputinfo">성별</Text>
        <GenderButton genders={genders} onClick={onClickGender} />
      </View>

      <View className="flex-1 left-view gap-1">
        <Text className="custom-inputinfo">대화 모드</Text>
        <GenderButton genders={modes} onClick={onClickMode} />
      </View>

      <MainButton text="다음" nav="FormJob" onClick={handleNext} isAbled={btnDisbled} />
    </View>
  );
};

export default FormGender;
