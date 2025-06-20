import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Custom from "@/styles/Custom";
import { Summary } from "@/models/chatting.model";
import ChatSummary from "@/components/ChatSummary";
import NavBar from "@/components/NavBar";
import { router } from "expo-router";
import NoChat from "@/components/NoChat";
import { StyleSheet } from "react-native";
import { getChatListMain } from "@/api/chat.api";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  const [data, setData] = useState<Summary[]>([]);

  useEffect(() => {
    const fetchRecentChat = async () => {
      try {
        const res = await getChatListMain();

        if (res.status === 200) {
          setData(res.data.result);
        }
      } catch (err: any) {
        console.log("error: ", err.response.data.error);
      }
    };

    fetchRecentChat();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" />

      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 24,
            paddingTop: 44,
            paddingBottom: 28,
            position: "relative",
          }}
        >
          <Text style={Custom.title_m}>
            반가워요! {"\n"}
            <Text style={{ color: "#988BFD" }}>개인 맞춤형 대화</Text>를 통해
            {"\n"}졸음 운전을 예방해보세요
          </Text>
          <Image
            style={{
              width: 120,
              height: 120,
              position: "absolute",
              right: 0,
              bottom: 10,
            }}
            source={require("../assets/images/users.png")}
          />
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            paddingVertical: 4,
            backgroundColor: "#ffffff",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingTop: 20,
          }}
        >
          <View style={{ flex: 1, gap: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={Custom.myTitle}>최근 대화</Text>
              <TouchableOpacity onPress={() => router.push("chattinglist")}>
                <Text style={Custom.description}>전체 보기</Text>
              </TouchableOpacity>
            </View>
            {data.length > 0 ? (
              data.map((item, idx) => (
                <ChatSummary key={idx} item={item} idx={idx} />
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
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
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
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../assets/images/video.png")}
                />
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#F4F3FF",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 12,
    lineHeight: 24,
    color: "#988BFD",
  },
});
