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
      <View style={[Custom.leftview, { paddingVertical: 70, gap: 16 }]}>
        <View style={{ gap: 8 }}>
          <Text style={Custom.title}>개인 맞춤형 음성 대화와</Text>
          <Text style={Custom.title}>졸음 감지를 동시에 ! </Text>
        </View>

        <Text style={Custom.description}>
          <Text style={{ color: "#3182F6" }}>DriveMate</Text>와 함께 안전운전을
          시작하세요
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
          paddingTop: 40,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../assets/images/bell.png")}
        />
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../assets/images/emoji.png")}
        />
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../assets/images/heart.png")}
        />
      </View>

      <KakaoBtn />
    </View>
  );
};

export default Entry;
