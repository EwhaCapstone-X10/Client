import { View, Text } from "react-native";
import React from "react";
import Custom from "@/styles/Custom";

type HeaderProps = {
  left: string;
  title: string;
};

const Header = (props: HeaderProps) => {
  const onClickLeft = (left: string) => {
    if (left === "<-") {
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
      <Text style={Custom.title} onPress={() => onClickLeft(props.left)}>
        {props.left}
      </Text>
      <Text style={Custom.myTitle}>{props.title}</Text>
      <Text />
    </View>
  );
};

export default Header;
