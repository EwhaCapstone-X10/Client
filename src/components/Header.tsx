import { View, Text } from "react-native";
import React from "react";
import Custom from "@/styles/Custom";
import { router } from "expo-router";

type HeaderProps = {
  left: string;
  title: string;
  style: string;
};

const Header = (props: HeaderProps) => {
  const onClickLeft = (left: string) => {
    if (left === "<-") {
      router.back();
    } else {
      return;
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 24,
      }}
    >
      <Text style={Custom.header} onPress={() => onClickLeft(props.left)}>
        {props.left}
      </Text>
      <Text style={Custom[props.style]}>{props.title}</Text>
      <Text />
    </View>
  );
};

export default Header;
