import Header from "@/components/Header";
import StretchingVideo from "@/components/StretchingVideo";
import Custom from "@/styles/Custom";
import { videoList } from "@/utils/videoList";
import React from "react";
import { ScrollView, View } from "react-native";

const StretchingList = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="스트레칭 영상 목록" />
      <View style={[Custom.leftview, { flex: 1, gap: 30 }]}>
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 30 }}
        >
          {videoList.map((item) => (
            <StretchingVideo
              key={item.id}
              item={item}
              width={320}
              height={180}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default StretchingList;
