import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Header from "@/components/Header";
import Custom from "@/styles/Custom";
import { Summary } from "@/models/chatting.model";
import ChatSummary from "@/components/ChatSummary";
import NavBar from "@/components/NavBar";
import { router } from "expo-router";
import NoChat from "@/components/NoChat";
import { StyleSheet } from "react-native";
import { getChatListMain } from "@/api/chat.api";

const mockData: Summary[] = [
  {
    session_id: 0,
    year: 2025,
    started_at: new Date("2025-02-09T23:10:00"),
    summary: "하루종일 일해서 피곤해 함",
  },
  {
    session_id: 1,
    year: 2025,
    started_at: new Date("2025-01-15T07:10:00"),
    summary: "친구랑 일본 여행을 갔다와서 피곤함",
  },
  {
    session_id: 2,
    year: 2024,
    started_at: new Date("2024-03-09T11:10:00"),
    summary: "다음주 금요일에 있을 딸의 학예회가 매우 기대됨",
  },
  {
    session_id: 3,
    year: 2024,
    started_at: new Date("2024-02-09T16:10:00"),
    summary: "날씨가 좋아서 혼자 한강까지 드라이브 함",
  },
];

const Main = () => {
  /*
  useEffect(() => {
    // 백에서 최근 대화 4개 가져오기
    const fetchRecentChat = async () => {
      try {
        const res = await getChatListMain();
        const data = res.data;
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

    fetchRecentChat();
  }, []);
  */
  return (
    <View style={{ flex: 1 }}>
      <Header left="" title="drivemate" style="logo" />
      <View style={[Custom.leftview, { flex: 1, gap: 30 }]}>
        <Text style={Custom.title}>
          <Text style={{ color: "#3182F6" }}>개인 맞춤형 대화</Text>
          {"를 통해\n"}
          졸음 운전을 예방해보세요
        </Text>

        <View style={{ flex: 1, gap: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={Custom.myTitle}>최근 대화</Text>
            <TouchableOpacity onPress={() => router.push("chattinglist")}>
              <Text style={Custom.description}>전체 보기</Text>
            </TouchableOpacity>
          </View>
          {mockData.length > 0 ? (
            mockData.map((item) => (
              <ChatSummary key={item.session_id} item={item} />
            ))
          ) : (
            <NoChat />
          )}
        </View>

        <View
          style={{
            gap: 10,
            paddingTop: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => router.push("stretchinglist")}
              style={Stretching.view}
            >
              <View>
                <Text style={Stretching.title}>
                  영상을 보며 스트레칭 해보세요
                </Text>
                <Text style={Custom.description}>
                  스트레칭 영상 둘러보기{"    >"}
                </Text>
              </View>
              <View style={Stretching.imgbg}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/video.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <NavBar type={"home"} />
    </View>
  );
};

export default Main;

const Stretching = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0F4F9",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
    lineHeight: 24,
    color: "#0E2C5E",
  },
  imgbg: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
