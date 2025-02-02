import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

const Welcome = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/main");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Image
        style={{ width: 240, height: 240 }}
        source={require("../assets/images/clap.png")}
      />
      <Text
        style={{
          fontFamily: "Pretendard-Bold",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        안수이님 환영해요 !
      </Text>
    </View>
  );
};

export default Welcome;
