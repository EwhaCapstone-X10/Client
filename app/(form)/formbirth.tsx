import React, { useState } from "react";
import { Text, View } from "react-native";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import DatePicker from "react-native-date-picker";

const FormBirth = () => {
  const [birthDate, setBirthDate] = useState(new Date("2005-01-01"));
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
        <Text style={Custom.title}>생년월일을 입력해주세요</Text>
        <Text style={Custom.description}>
          개인 정보는 맞춤형 대화 용도로만 사용됩니다
        </Text>
      </View>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 20,
          },
        ]}
      >
        <Text style={Custom.inputinfo}>생년월일</Text>
        <DatePicker
          mode="date"
          date={birthDate}
          onDateChange={setBirthDate}
          maximumDate={new Date("2005-12-31")}
          minimumDate={new Date("1945-01-01")}
          dividerColor="#EDEDEC"
        />
      </View>
      <MainBtn
        text="다음"
        nav="formgender"
        onClick={handleNext}
        isAbled={false}
      />
    </View>
  );
};

export default FormBirth;
