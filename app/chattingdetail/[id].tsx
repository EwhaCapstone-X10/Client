import { getChatDetail } from "@/api/chat.api";
import ChatBubble from "@/components/ChatBubble";
import Header from "@/components/Header";
import KebabModal from "@/components/KebabModal";
import KeywordBtn from "@/components/KeywordBtn";
import { Detail } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import { getDate } from "@/utils/getDate";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const mockData: Detail = {
  chatId: 2,
  date: new Date("2024-02-09T16:10:00"),
  summary: "하루종일 일해서 피곤해 함",
  keywords: "평온한, 즐거운, 학예회, 딸과의 외식, 기대되는, 핑크퐁",
  chatting: [
    {
      idx: 0,
      role: "gpt",
      chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요? 운전 중이신가요?",
    },
    { idx: 1, role: "user", chat: "네 즐거운 하루를 보냈어요" },
    { idx: 2, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { idx: 3, role: "user", chat: "아뇨" },
    { idx: 4, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { idx: 5, role: "user", chat: "네 즐거운 하루를 보냈어요" },
    { idx: 6, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { idx: 7, role: "user", chat: "네 즐거운 하루를 보냈어요" },
  ],
};

const ChattingList = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const date = getDate(mockData.date);
  const keywordsList = mockData.keywords.split(",");
  const chatId = Number(id);

  /*
  useEffect(() => {
    // 백에서 상세 대화 내역 가져오기
    const fetchChatDetail = async () => {
      try {
        const res = await getChatDetail(chatId);
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

    fetchChatDetail();
  }, []);
  */

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title={date} style="header" />
      <View style={[Custom.leftview, { flex: 1, gap: 30 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={Custom.title}>{mockData.summary}</Text>
          <TouchableOpacity onPress={() => setModalOpen(true)}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require("../../assets/images/kebabmenu.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ gap: 20 }}>
          <Text style={Custom.myTitle}>주요 키워드</Text>
          <KeywordBtn keywords={keywordsList} />
        </View>

        <View style={{ flex: 1, gap: 20 }}>
          <Text style={Custom.myTitle}>대화 내역</Text>
          <ChatBubble chatting={mockData.chatting} />
        </View>
      </View>
      {modalOpen && <KebabModal setModalOpen={setModalOpen} id={chatId} />}
    </View>
  );
};
export default ChattingList;
