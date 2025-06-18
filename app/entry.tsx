import Custom from "@/styles/Custom";
import React from "react";
import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import DirectBtn from "@/components/button/DirectBtn";

const Entry = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="transparent" />
      <View style={[Custom.leftview, { paddingVertical: 50, gap: 16 }]}>
        <View>
          <Text style={Custom.title}>개인 맞춤형 음성 대화와</Text>
          <Text style={Custom.title}>졸음 감지를 동시에 ! </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 14,
        }}
      >
        <Image
          style={{
            width: 340,
            height: 300,
          }}
          source={require("../assets/images/main.png")}
        />
      </View>

      <DirectBtn />
    </View>
  );
};

export default Entry;
