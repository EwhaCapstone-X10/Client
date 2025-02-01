import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MainBtn from '../components/MainBtn';
import Header from '../components/Header';
import CommonStyles from '../styles/CommonStyles';
import HobbyBtn from '../components/HobbyBtn';
import { hobbyList } from '../utils/hobbyList';

const FormHobby = () => {
  const [hobbies, setHobbies] = useState<string[]>([]);

  const onClickHobby = (title: string) => {
    setHobbies((prevHobbies) => {
      if (prevHobbies.includes(title)) {
        return prevHobbies.filter((hobby) => hobby !== title);
      }
      if (prevHobbies.length < 5) {
        return [...prevHobbies, title];
      }
      return prevHobbies;
    });
  };
  const handleNext = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
  };

  return (
    <View style={{ flex: 1 }}>
      <Header left="<-" title="drivemate" />
      <View
        style={[
          CommonStyles.leftview,
          {
            gap: 12,
          },
        ]}
      >
        <Text style={CommonStyles.title}>취미나 관심사를 선택해주세요</Text>
        <Text style={CommonStyles.description}>최대 5개까지 선택 가능합니다</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ gap: 30, paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
        style={[
          CommonStyles.leftview,
          {
            flex: 1,
          },
        ]}
      >
        <View style={{ gap: 12 }}>
          <Text style={CommonStyles.inputinfo}>엔터테인먼트/예술</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === 'entertainment')}
            onClick={onClickHobby}
          />
        </View>
        <View style={{ gap: 12 }}>
          <Text style={CommonStyles.inputinfo}>운동/액티비티</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === 'sport')}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={CommonStyles.inputinfo}>취미</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === 'hobby')}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={CommonStyles.inputinfo}>학습/개발</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === 'study')}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={CommonStyles.inputinfo}>기타</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === 'etc')}
            onClick={onClickHobby}
          />
        </View>
      </ScrollView>
      <MainBtn text="완료" nav="Main" onClick={handleNext} isAbled={false} />
    </View>
  );
};

export default FormHobby;
