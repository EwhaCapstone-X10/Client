import ChatSummary from "@/components/ChatSummary";
import NoChat from "@/components/NoChat";
import YearModal from "@/components/YearModal";
import { Summary } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const mockData: Summary[] = [
  {
    id: 0,
    year: 2025,
    date: "02월 01일 12:32",
    summary: "하루종일 일해서 피곤해 함",
  },
  {
    id: 1,
    year: 2025,
    date: "01월 25일 12:32",
    summary: "친구랑 일본 여행을 갔다와서 피곤함",
  },
  {
    id: 2,
    year: 2024,
    date: "08월 25일 12:32",
    summary: "다음주 금요일에 있을 딸의 학예회가 매우 기대됨",
  },
  {
    id: 3,
    year: 2024,
    date: "06월 25일 12:32",
    summary: "날씨가 좋아서 혼자 한강까지 드라이브 함",
  },
];

const ChattingList = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const filteredData = mockData.filter((item) => item.year === selectedYear);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={[Custom.leftview, { flex: 1, gap: 20 }]}>
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}
      >
        <Text
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 11,
            color: "#4E4C49",
          }}
        >
          {selectedYear}
        </Text>
        <Image
          source={require("../../assets/images/drop_down.png")}
          style={{ width: 22, height: 22 }}
        />
      </TouchableOpacity>

      {filteredData.length > 0 ? (
        filteredData.map((item) => <ChatSummary key={item.id} item={item} />)
      ) : (
        <NoChat />
      )}
      {modalOpen && (
        <YearModal
          setModalOpen={setModalOpen}
          setSelectedYear={setSelectedYear}
        />
      )}
    </View>
  );
};
export default ChattingList;
