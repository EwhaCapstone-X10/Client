import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import { Gender } from "@/models/user.model";
import GenderBtn from "@/components/GenderBtn";
import { router } from "expo-router";

const EditMode = () => {
  const [modes, setModes] = useState<Gender[]>([
    { id: 0, title: "반말", type: "CASUAL", isClicked: false },
    { id: 1, title: "존댓말", type: "FORMAL", isClicked: false },
  ]);

  const [btnDisbled, setBtnDisabled] = useState(true);

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
    const isClickedMode = modes.some((mode) => mode.isClicked);
    setBtnDisabled(!isClickedMode);
  }, [[modes]]);

  const handleComplete = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
    router.push("myinfo");
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 16,
          },
        ]}
      >
        <Text style={Custom.myTitle}>대화모드</Text>
        <GenderBtn genders={modes} onClick={onClickMode} />
      </View>
      <MainBtn text="완료" onClick={handleComplete} isAbled={btnDisbled} />
    </View>
  );
};

export default EditMode;
