import React from "react";
import { Image, Text, View } from "react-native";
import Custom from "@/styles/Custom";
import MainBtn from "@/components/MainBtn";
import { router } from "expo-router";

const EndChat = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={[Custom.leftview, { paddingVertical: 40 }]}>
        <Text
          style={[
            Custom.title,
            {
              lineHeight: 40,
            },
          ]}
        >
          대화가 저장되었습니다 {"\n"}다음에 또 만나요 !
        </Text>
      </View>
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
          source={require("../assets/images/flag.png")}
        />
      </View>
      <MainBtn
        text="메인화면으로 이동"
        onClick={() => {
          router.push("main");
        }}
        isAbled={false}
      />
    </View>
  );
};

export default EndChat;
