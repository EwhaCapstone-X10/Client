import ChatSummary from "@/components/ChatSummary";
import NoChat from "@/components/NoChat";
import YearModal from "@/components/YearModal";
import { Summary } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getChatList } from "@/api/chat.api";

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

const ChattingList = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const filteredData = mockData.filter((item) => item.year === selectedYear);
  const [modalOpen, setModalOpen] = useState(false);

  /*
  useEffect(() => {
    // 백에서 최근 대화 4개 가져오기
    const fetchRecentChat = async () => {
      try {
        const res = await getChatList();
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
        filteredData.map((item) => (
          <ChatSummary key={item.session_id} item={item} />
        ))
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
