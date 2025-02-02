import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

import Header from "@/components/Header";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";

const FormAge = () => {
  const [age, onChangeAge] = useState("");
  const [focus, setFocus] = useState(false);
  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="drivemate" />
      <View
        style={[
          Custom.leftview,
          {
            gap: 12,
          },
        ]}
      >
        <Text style={Custom.title}>나이를 입력해주세요</Text>
        <Text style={Custom.description}>숫자만 입력해주세요</Text>
      </View>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
          },
        ]}
      >
        <Text style={Custom.inputinfo}>나이</Text>
        <TextInput
          onChangeText={onChangeAge}
          value={age}
          keyboardType="number-pad"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#5299FF" }]}
        />
      </View>
      <MainBtn
        text="다음"
        nav="formgender"
        onClick={handleNext}
        isAbled={!age || Number(age) > 90 || Number(age) < 17}
      />
    </View>
  );
};

export default FormAge;
