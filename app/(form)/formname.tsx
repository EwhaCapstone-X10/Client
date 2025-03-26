import MainBtn from "@/components/button/MainBtn";
import useUserStore from "@/store/userStore";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const FormName = () => {
  const [focus, setFocus] = useState(false);
  const { user, setName } = useUserStore();

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
          onChangeText={setName}
          value={user.name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#988BFD" }]}
        />
      </View>
      <MainBtn
        text="다음"
        onClick={() => {
          router.push("formbirth");
        }}
        isAbled={!user.name}
      />
    </View>
  );
};

export default FormName;
