import Header from "@/components/Header";
import { Slot, useSegments } from "expo-router";
import React from "react";

const ListLayout = () => {
  const segments = useSegments(); // 현재 경로 세그먼트를 가져옴
  const lastSegment = segments[segments.length - 1]; // 경로의 마지막 부분 (자식 경로)

  // 경로에 따라 동적으로 title 설정
  const title =
    lastSegment === "stretchinglist" ? "스트레칭 영상 목록" : "전체 대화 내역";

  return (
    <>
      <Header left="<-" title={title} style="header" />
      <Slot />
    </>
  );
};

export default ListLayout;
