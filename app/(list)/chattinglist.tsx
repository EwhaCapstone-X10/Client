import ChatSummary from "@/components/ChatSummary";
import NoChat from "@/components/NoChat";
import { Summary } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View } from "react-native";

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
  const today = new Date();
  const year = today.getFullYear();
  const [selectedYear, setSelectedYear] = useState(year);
  const filteredData = mockData.filter((item) => item.year === selectedYear);

  return (
    <View style={[Custom.leftview, { flex: 1, gap: 10 }]}>
      <Picker
        dropdownIconRippleColor={"white"}
        selectedValue={selectedYear}
        onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
      >
        <Picker.Item label={String(year)} value={year} />
        <Picker.Item label={String(year - 1)} value={year - 1} />
        <Picker.Item label={String(year - 2)} value={year - 2} />
        <Picker.Item label={String(year - 3)} value={year - 3} />
        <Picker.Item label={String(year - 4)} value={year - 4} />
      </Picker>

      {filteredData.length > 0 ? (
        filteredData.map((item) => <ChatSummary key={item.id} item={item} />)
      ) : (
        <NoChat />
      )}
    </View>
  );
};
export default ChattingList;
