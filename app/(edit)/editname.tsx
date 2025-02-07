import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const EditName = () => {
  const [name, onChangeName] = useState("");
  const [focus, setFocus] = useState(false);

  const handleComplete = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={[Custom.leftview, { flex: 1, gap: 12 }]}>
        <Text style={Custom.myTitle}>이름</Text>
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
        text="완료"
        nav="myinfo"
        onClick={handleComplete}
        isAbled={!name}
      />
    </View>
  );
};

export default EditName;
