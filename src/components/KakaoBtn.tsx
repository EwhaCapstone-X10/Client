import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import { login, logout } from "@react-native-seoul/kakao-login";

const KakaoBtn = () => {
  const [result, setResult] = useState<string>("");

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
      console.log("로그인 성공", token.accessToken);
      router.push("/formname");
    } catch (err) {
      console.error("로그인 실패", err);
    }
  };

  return (
    <View style={Custom.view}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: 12,
          paddingVertical: 12,
          borderRadius: 12,
          backgroundColor: "#FFF175",
          marginBottom: 16,
          marginTop: 20,
        }}
        onPress={signInWithKakao}
      >
        <Image
          style={{
            width: 18,
            height: 16,
          }}
          source={require("../../assets/images/kakao.png")}
        />
        <Text
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 12,
          }}
        >
          카카오로 계속하기
        </Text>
      </TouchableOpacity>
      <Text style={Custom.description}>⚡3초만에 빠른 회원가입</Text>
    </View>
  );
};

export default KakaoBtn;
