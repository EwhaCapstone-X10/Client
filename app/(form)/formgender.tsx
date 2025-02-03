import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Header from "@/components/Header";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import { Gender } from "@/models/user.model";
import GenderBtn from "@/components/GenderBtn";

const FormGender = () => {
  const [genders, setGenders] = useState([
    { id: 0, type: "남성", isClicked: false },
    { id: 1, type: "여성", isClicked: false },
  ]);

  const [modes, setModes] = useState<Gender[]>([
    { id: 0, type: "반말", isClicked: false },
    { id: 1, type: "존댓말", isClicked: false },
  ]);

  const [btnDisbled, setBtnDisabled] = useState(true);

  const onClickGender = (id: number) => {
    setGenders(
      genders.map((gender) =>
        gender.id === id
          ? { ...gender, isClicked: true }
          : { ...gender, isClicked: false }
      )
    );
  };

  const onClickMode = (id: number) => {
    setModes(
      modes.map((mode) =>
        mode.id === id
          ? { ...mode, isClicked: true }
          : { ...mode, isClicked: false }
      )
    );
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
      <View
        style={[
          Custom.leftview,
          {
            gap: 12,
          },
        ]}
      >
        <Text style={Custom.title}>성별 및 대화모드를 선택해주세요</Text>
        <Text style={Custom.description}>
          더욱 개인화 된 서비스를 제공해드립니다
        </Text>
      </View>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 16,
          },
        ]}
      >
        <View>
          <Text style={Custom.inputinfo}>성별</Text>
          <GenderBtn genders={genders} onClick={onClickGender} />
        </View>

        <View>
          <Text style={Custom.inputinfo}>대화 모드</Text>
          <GenderBtn genders={modes} onClick={onClickMode} />
        </View>
      </View>
      <MainBtn
        text="다음"
        nav="formjob"
        onClick={handleNext}
        isAbled={btnDisbled}
      />
    </View>
  );
};

export default FormGender;
