import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CommonStyles from '../styles/CommonStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../models/navigation.model';
import ChatSummary from '../components/ChatSummary';
import { Summary } from '../models/chatting.model';
import { Video } from '../models/video.model';
import StretchingVideo from '../components/StretchingVideo';

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
const video: Video[] = [
  {
    id: 0,
    src: '영상 링크 1',
    title: '영상 제목 1',
  },
  {
    id: 1,
    src: '영상 링크 2',
    title: '영상 제목 2',
  },
  {
    id: 2,
    src: '영상 링크 3',
    title: '영상 제목 3',
  },
];

const Main = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <Header left="" title="drivemate" />
      <View
        style={[
          CommonStyles.leftview,
          {
            gap: 40,
          },
        ]}
      >
        <Text style={CommonStyles.title}>
          <Text style={{ color: '#3182F6' }}>개인 맞춤형 대화</Text>
          {'를 통해\n'}
          졸음 운전을 예방해보세요
        </Text>
      </View>

      <View style={[CommonStyles.leftview, { gap: 10 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={CommonStyles.title}>최근 대화</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ChattingList')}>
            <Text style={CommonStyles.description}>전체 보기</Text>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 16 }}>
          {mockData.map((item) => (
            <ChatSummary key={item.id} item={item} />
          ))}
        </View>
      </View>

      <View
        style={[
          CommonStyles.leftview,
          {
            flex: 1,
            gap: 10,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={CommonStyles.title}>스트레칭 영상</Text>
          <TouchableOpacity onPress={() => navigation.navigate('StretchingList')}>
            <Text style={CommonStyles.description}>전체 보기</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 30 }}
        >
          {video.map((item) => (
            <StretchingVideo key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>

      <NavBar type={'home'} />
    </View>
  );
};

export default Main;
