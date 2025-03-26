import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import { login } from "@react-native-seoul/kakao-login";
import { postOauth } from "@/api/user.api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserStore from "@/store/userStore";

const KakaoBtn = () => {
  const { setId } = useUserStore();

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();

      if (token?.accessToken) {
        const res = await postOauth(token.accessToken);
        console.log(res);

        if (res?.status === 200) {
          await AsyncStorage.setItem(
            "memberId",
            String(res.data.result.memberId)
          );
          await AsyncStorage.setItem("jwtToken", res.data.result.jwtToken);
          await setId(res.data.result.memberId);
          router.push("/formname");
        }
      }
    } catch (err) {
      console.error("로그인 실패:", err);
    }
  };
  return (
    <View style={Custom.view}>
      <TouchableOpacity style={Custom.kakaobtn} onPress={signInWithKakao}>
        <Image
          style={{
            width: 18,
            height: 16,
          }}
          source={require("../../../assets/images/kakao.png")}
        />
        <Text style={Custom.title_m}>카카오로 계속하기</Text>
      </TouchableOpacity>
      <Text style={Custom.description}>⚡3초만에 빠른 회원가입</Text>
    </View>
  );
};

export default KakaoBtn;
