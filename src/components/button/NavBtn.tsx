import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { Nav } from "../NavBar";
import { router } from "expo-router";

type NavButtonProps = {
  type: Nav;
  nav: string;
};

const NavBtn = (props: NavButtonProps) => {
  return (
    <TouchableOpacity
      style={{ flex: 0, alignItems: "center", gap: 3, minWidth: 100 }}
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
          fontSize: 9,
          color: props.type.isBlue ? "#988BFD" : "#8D8D8A",
        }}
      >
        {props.type.title}
      </Text>
    </TouchableOpacity>
  );
};

export default NavBtn;
