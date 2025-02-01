import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import CommonStyles from '../styles/CommonStyles';
import MyInfoEdit from '../components/MyInfoEdit';
import { InfoItem, User } from '../models/user.model';

const mockData: User = {
  name: '안수이',
  age: '25',
  gender: '여성',
  job: '학생',
  hobby: ['자전거', '서핑', '볼링', '테니스', '야구'],
  mode: '반말',
};

const MyInfo = () => {
  const [infoList, setInfoList] = useState<InfoItem[]>([
    {
      id: 0,
      title: '이름',
      value: '',
    },
    {
      id: 1,
      title: '나이',
      value: '',
    },
    {
      id: 2,
      title: '성별',
      value: '',
    },
    {
      id: 3,
      title: '직업',
      value: '',
    },
    {
      id: 4,
      title: '취미 및 관심사',
      value: '',
    },
  ]);

  useEffect(() => {
    setInfoList((prevInfoList) =>
      prevInfoList.map((info) => {
        switch (info.title) {
          case '이름':
            return { ...info, value: mockData.name };
          case '나이':
            return { ...info, value: mockData.age };
          case '성별':
            return { ...info, value: mockData.gender };
          case '직업':
            return { ...info, value: mockData.job };
          case '취미 및 관심사':
            return { ...info, value: mockData.hobby.join(', ') };
          default:
            return info;
        }
      }),
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="내 정보" />
      <View style={{ gap: 10 }}>
        <View
          style={[
            CommonStyles.leftview,
            {
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: '#EDEDEC',
            },
          ]}
        >
          <Text style={CommonStyles.description}>내 정보 관리</Text>
          {infoList.map((info) => (
            <MyInfoEdit info={info} />
          ))}
        </View>
        <View
          style={[
            CommonStyles.leftview,
            {
              gap: 10,
            },
          ]}
        >
          <TouchableOpacity>
            <Text style={CommonStyles.myTitle}>이용약관</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={CommonStyles.myTitle}>고객센터</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={CommonStyles.myTitle}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyInfo;
