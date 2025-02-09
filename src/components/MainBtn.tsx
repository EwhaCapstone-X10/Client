import Custom from "@/styles/Custom";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  text: string;
  isAbled: boolean;
  onClick: () => void;
};

const MainBtn = ({ text, isAbled, onClick }: ButtonProps) => {
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
          isAbled
            ? { backgroundColor: "#DFDEDA" }
            : { backgroundColor: "#5299FF" },
        ]}
        onPress={onClick}
        disabled={isAbled}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Pretendard-SemiBold",
            fontSize: 12,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainBtn;
