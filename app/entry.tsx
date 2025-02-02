import KakaoBtn from "@/components/KakaoBtn";
import Custom from "@/styles/Custom";
import React from "react";
import { Image, Text, View } from "react-native";

const Entry = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 320,
            height: 240,
          }}
          source={require("../assets/images/speech_bubble.png")}
        />
        <View style={[Custom.view, { gap: 12 }]}>
          <Text style={Custom.title}>졸음 감지 및 맞춤형 AI 대화</Text>
          <Text style={Custom.description}>
            DriveMate와 함께 안전운전을 시작하세요 !
          </Text>
        </View>
      </View>
      <KakaoBtn />
    </View>
  );
};

export default Entry;
