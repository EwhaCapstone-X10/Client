import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import { Picker } from '@react-native-picker/picker';
import ChatSummary from '../components/ChatSummary';
import CommonStyles from '../styles/CommonStyles';
import { Summary } from '../models/chatting.model';
import NoChat from '../components/NoChat';

const mockData: Summary[] = [
  {
    id: 0,
    year: 2025,
    date: '02월 01일 12:32 126분',
    summary: '하루종일 일해서 피곤해 함',
  },
  {
    id: 1,
    year: 2025,
    date: '01월 25일 12:32 126분',
    summary: '친구랑 일본 여행을 갔다와서 피곤함',
  },
  {
    id: 2,
    year: 2024,
    date: '08월 25일 12:32 126분',
    summary: '다음주 금요일에 있을 딸의 학예회가 매우 기대됨',
  },
];

const ChattingList = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [selectedYear, setSelectedYear] = useState(year);
  const filteredData = mockData.filter((item) => item.year === selectedYear);

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="전체 대화 내역" />
      <View style={CommonStyles.leftview}>
        <Picker selectedValue={selectedYear} onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}>
          <Picker.Item label={String(year)} value={year} />
          <Picker.Item label={String(year - 1)} value={year - 1} />
          <Picker.Item label={String(year - 2)} value={year - 2} />
          <Picker.Item label={String(year - 3)} value={year - 3} />
          <Picker.Item label={String(year - 4)} value={year - 4} />
        </Picker>
        <View style={{ gap: 16 }}>
          {filteredData.length > 0 ? filteredData.map((item) => <ChatSummary key={item.id} item={item} />) : <NoChat />}
        </View>
      </View>
    </View>
  );
};
export default ChattingList;
