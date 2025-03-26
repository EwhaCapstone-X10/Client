import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MainBtn from "@/components/button/MainBtn";
import Custom from "@/styles/Custom";
import { Gender } from "@/models/user.model";
import GenderBtn from "@/components/button/GenderBtn";
import useUserStore from "@/store/userStore";
import { router } from "expo-router";

const FormGender = () => {
  const { setSex, setMode } = useUserStore();

  const [genders, setGenders] = useState<Gender[]>([
    { id: 0, title: "남성", type: "MALE", isClicked: false },
    { id: 1, title: "여성", type: "FEMALE", isClicked: false },
  ]);

  const [modes, setModes] = useState<Gender[]>([
    { id: 0, title: "반말", type: "CASUAL", isClicked: false },
    { id: 1, title: "존댓말", type: "FORMAL", isClicked: false },
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

  const handleNext = () => {
    const selectedGender = genders.find((gender) => gender.isClicked);
    const selectedMode = modes.find((mode) => mode.isClicked);

    if (selectedGender) setSex(selectedGender.type);
    if (selectedMode) setMode(selectedMode.type);
    router.push("formjob");
  };

  useEffect(() => {
    const isClickedGender = genders.some((gender) => gender.isClicked);
    const isClickedMode = modes.some((mode) => mode.isClicked);
    setBtnDisabled(!(isClickedGender && isClickedMode));
  }, [[genders, modes]]);

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
      <MainBtn text="다음" onClick={handleNext} isAbled={btnDisbled} />
    </View>
  );
};

export default FormGender;
