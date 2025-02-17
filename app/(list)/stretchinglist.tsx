import { getStretching } from "@/api/stretching.api";
import StretchingVideo from "@/components/StretchingVideo";
import Custom from "@/styles/Custom";
import { videoList } from "@/utils/videoList";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";

const StretchingList = () => {
  /*
  useEffect(() => {
    // 백에서 스트레칭 리스트 가져오기
    const fetchStretching = async () => {
      try {
        const res = await getStretching();
        const list = res.data;
        console.log(res);
        if (res.status === 200) {
        }
      } catch (err: any) {
        if (err.response.statue === 400 || err.response.status === 500) {
          console.log("error: ", err.response.data.error);
        } else {
          console.log(err);
        }
      }
    };

    fetchStretching();
  }, []);
  */

  return (
    <View style={[Custom.leftview, { flex: 1, gap: 30 }]}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 30 }}
      >
        {videoList.map((item) => (
          <StretchingVideo
            key={item.stretchingId}
            item={item}
            width={320}
            height={180}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default StretchingList;
