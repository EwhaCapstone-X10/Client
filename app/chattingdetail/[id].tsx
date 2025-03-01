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

const ChattingList = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const [detailData, setDetailData] = useState<Detail | null>(null);
  const [keywordsList, setKeywordsList] = useState<string[] | null>([]);
  const date = detailData ? getDate(new Date(detailData.date)) : "";
  const chatId = Number(id);

  useEffect(() => {
    // 백에서 상세 대화 내역 가져오기
    const fetchChatDetail = async () => {
      try {
        const res = await getChatDetail(chatId);
        console.log(res.data.result);
        if (res.status === 200) {
          setDetailData(res.data.result);
          setKeywordsList(res.data.result.keywords?.split(",") || []);
        }
      } catch (err: any) {
        if (err.response?.status === 400 || err.response?.status === 500) {
          console.log("Error: ", err.response?.data.error);
        } else {
          console.log(err);
        }
      }
    };

    fetchChatDetail();
  }, [chatId]);

  // 오류 처리: 데이터가 로드되기 전에 화면을 렌더링하는 것을 방지
  if (!detailData) {
    return <Text>로딩 중...</Text>;
  }

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
          <Text style={Custom.title}>
            {detailData.summary || "요약이 아직 없음"}
          </Text>
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
          <ChatBubble chatting={detailData.chatting} />
        </View>
      </View>
      {modalOpen && <KebabModal setModalOpen={setModalOpen} id={chatId} />}
    </View>
  );
};

export default ChattingList;
