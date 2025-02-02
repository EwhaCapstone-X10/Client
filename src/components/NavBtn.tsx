import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { Nav } from "./NavBar";
import { router } from "expo-router";

type NavButtonProps = {
  type: Nav;
  nav: string;
};

const NavBtn = (props: NavButtonProps) => {
  return (
    <TouchableOpacity
      style={{ flex: 0, alignItems: "center", paddingHorizontal: 10, gap: 3 }}
      //이동 코드
      onPress={() => router.push(props.nav)}
    >
      <Image
        style={{ width: 24, height: 24 }}
        source={props.type.isBlue ? props.type.bluesrc : props.type.graysrc}
      />
      <Text
        style={{
          fontFamily: "Pretendard-SemiBold",
          fontSize: 12,
          color: props.type.isBlue ? "#3182f6" : "#9db2ce",
        }}
      >
        {props.type.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavBtn;
