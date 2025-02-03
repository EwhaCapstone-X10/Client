import ChatBubble from "@/components/ChatBubble";
import Header from "@/components/Header";
import KebabModal from "@/components/KebabModal";
import KeywordBtn from "@/components/KeywordBtn";
import { Detail } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const mockData: Detail = {
  date: "2025년 02월 01일",
  summary: "하루종일 일해서 피곤해 함",
  keywords: ["평온한", "즐거운", "학예회", "딸과의 외식", "기대되는", "핑크퐁"],
  chatting: [
    {
      id: 0,
      role: "gpt",
      chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요? 운전 중이신가요?",
    },
    { id: 1, role: "user", chat: "네 즐거운 하루를 보냈어요" },
    { id: 2, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { id: 3, role: "user", chat: "아뇨" },
    { id: 4, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { id: 5, role: "user", chat: "네 즐거운 하루를 보냈어요" },
    { id: 6, role: "gpt", chat: "안녕하세요 오늘도 즐거운 하루 보내셨나요?" },
    { id: 7, role: "user", chat: "네 즐거운 하루를 보냈어요" },
  ],
};

const ChattingList = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title={mockData.date} style="header" />
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
          <KeywordBtn keywords={mockData.keywords} />
        </View>

        <View style={{ flex: 1, gap: 20 }}>
          <Text style={Custom.myTitle}>대화 내역</Text>
          <ChatBubble chatting={mockData.chatting} />
        </View>
      </View>
      {modalOpen && <KebabModal setModalOpen={setModalOpen} id={id} />}
    </View>
  );
};
export default ChattingList;
