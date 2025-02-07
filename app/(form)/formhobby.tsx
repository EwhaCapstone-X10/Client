import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import HobbyBtn from "@/components/HobbyBtn";
import { hobbyList } from "@/utils/hobbyList";

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
      <View
        style={[
          Custom.leftview,
          {
            gap: 12,
          },
        ]}
      >
        <Text style={Custom.title}>취미나 관심사를 선택해주세요</Text>
        <Text style={Custom.description}>최대 5개까지 선택 가능합니다</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ gap: 30, paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
        style={[
          Custom.leftview,
          {
            flex: 1,
          },
        ]}
      >
        <View style={{ gap: 12 }}>
          <Text style={Custom.inputinfo}>엔터테인먼트/예술</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === "entertainment")}
            onClick={onClickHobby}
          />
        </View>
        <View style={{ gap: 12 }}>
          <Text style={Custom.inputinfo}>운동/액티비티</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === "sport")}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={Custom.inputinfo}>취미</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === "hobby")}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={Custom.inputinfo}>학습/개발</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === "study")}
            onClick={onClickHobby}
          />
        </View>

        <View style={{ gap: 12 }}>
          <Text style={Custom.inputinfo}>기타</Text>
          <HobbyBtn
            hobbies={hobbies}
            hobby={hobbyList.filter((hobby) => hobby.type === "etc")}
            onClick={onClickHobby}
          />
        </View>
      </ScrollView>
      <MainBtn text="완료" nav="welcome" onClick={handleNext} isAbled={false} />
    </View>
  );
};

export default FormHobby;
