import Header from "@/components/Header";
import { Slot, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

const ListLayout = () => {
  const segments = useSegments(); // 현재 경로 세그먼트를 가져옴
  const lastSegment = segments[segments.length - 1]; // 경로의 마지막 부분 (자식 경로)

  // 경로에 따라 동적으로 title 설정
  const title = (() => {
    switch (lastSegment) {
      case "edithobby":
        return "취미 및 관심사 수정하기";
      case "editjob":
        return "직업 수정하기";
      case "editmode":
        return "대화 모드 수정하기";
      case "editname":
        return "이름 수정하기";
      case "userpolicy":
        return "이용약관";
      default:
        return "페이지";
    }
  })();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" />
      <Header left="<-" title={title} style="header" />
      <Slot />
    </View>
  );
};

export default ListLayout;
