import Custom from "@/styles/Custom";
import { useRouter } from "expo-router"; // useRouter 훅 사용
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  isAbled: boolean;
  nav: string;
  onClick: () => void;
};

const MainBtn = (props: ButtonProps) => {
  const router = useRouter(); // useRouter 훅 사용

  const handlePress = () => {
    router.push(props.nav); // 문자열 경로로 이동
  };

  return (
    <View style={Custom.view}>
      <TouchableOpacity
        style={[
          {
            alignItems: "center",
            width: "100%",
            paddingVertical: 12,
            borderRadius: 12,
          },
          props.isAbled
            ? { backgroundColor: "#DFDEDA" }
            : { backgroundColor: "#5299FF" },
        ]}
        onPress={handlePress}
        disabled={props.isAbled}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Pretendard-SemiBold",
            fontSize: 12,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainBtn;
