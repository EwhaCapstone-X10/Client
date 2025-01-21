import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MainButton from '../components/MainButton';
import Header from '../components/Header';

const FormGender = () => {
  const [genders, setGenders] = useState([
    { id: 0, type: '남성', isClicked: false },
    { id: 1, type: '여성', isClicked: false },
  ]);

  const [btnDisbled, setBtnDisabled] = useState(true);

  const onClickGender = (id: number) => {
    setGenders(
      genders.map((gender) => (gender.id === id ? { ...gender, isClicked: true } : { ...gender, isClicked: false })),
    );
    setBtnDisabled(false);
  };

  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };
  return (
    <View className="flex-1">
      <Header left="<-" title="" right="drivemate" />
      <View className="left-view gap-3">
        <Text className="custom-title">성별을 선택해주세요</Text>
        <Text className="custom-description">더욱 개인화 된 서비스를 제공해드립니다</Text>
      </View>
      <View className="flex-1 left-view gap-1">
        <Text className="custom-inputinfo">성별</Text>
        <View className="flex-row w-full justify-center gap-5 py-3">
          {genders.map((gender) => (
            <TouchableOpacity
              key={gender.id}
              className="gender-button"
              onPress={() => onClickGender(gender.id)}
              style={{
                borderColor: gender.isClicked ? '#5299FF' : '#DFDEDA',
              }}
            >
              <Text
                className="font-Medium text-xl"
                style={{
                  color: gender.isClicked ? '#5299FF' : 'black',
                }}
              >
                {gender.type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <MainButton text="다음" nav="FormJob" onClick={handleNext} isAbled={btnDisbled} />
    </View>
  );
};

export default FormGender;
