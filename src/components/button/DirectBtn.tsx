import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Custom from "@/styles/Custom";
import { router } from "expo-router";

const DirectBtn = () => {
  return (
    <View style={Custom.view}>
      <TouchableOpacity
        style={Custom.yesbtn}
        onPress={() => router.push("/formname")}
      >
        <Text style={Custom.title_m}>새로 시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Custom.nobtn}
        onPress={() => router.push("/main")}
      >
        <Text style={Custom.title_m}>기존 정보로 이용하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DirectBtn;
