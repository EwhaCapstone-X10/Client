import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const FormName = () => {
  const [name, onChangeName] = useState("");
  const [focus, setFocus] = useState(false);

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
        <Text style={Custom.title}>이름을 입력해주세요</Text>
        <Text style={Custom.description}>대화 시 불릴 이름을 알려주세요</Text>
      </View>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 12,
          },
        ]}
      >
        <Text style={Custom.inputinfo}>이름</Text>
        <TextInput
          onChangeText={onChangeName}
          value={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#5299FF" }]}
        />
      </View>
      <MainBtn
        text="다음"
        nav="formbirth"
        onClick={handleNext}
        isAbled={!name}
      />
    </View>
  );
};

export default FormName;
