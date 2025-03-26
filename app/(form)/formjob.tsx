import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import MainBtn from "@/components/button/MainBtn";
import Custom from "@/styles/Custom";
import useUserStore from "@/store/userStore";
import { router } from "expo-router";

const FormJob = () => {
  const [focus, setFocus] = useState(false);
  const { user, setOccupation } = useUserStore();

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
        <Text style={Custom.title}>직업을 입력해주세요</Text>
        <Text style={Custom.description}>필수 입력은 아닙니다</Text>
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
        <Text style={Custom.inputinfo}>직업</Text>
        <TextInput
          onChangeText={setOccupation}
          value={user.occupation}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#988BFD" }]}
        />
      </View>
      <MainBtn
        text="다음"
        onClick={() => {
          router.push("formhobby");
        }}
        isAbled={false}
      />
    </View>
  );
};

export default FormJob;
