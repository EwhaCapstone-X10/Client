import React, { useEffect } from "react";
import { Text, View } from "react-native";
import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import DatePicker from "react-native-date-picker";
import useUserStore from "@/store/userStore";
import { router } from "expo-router";

const FormBirth = () => {
  const { user, setBirthdate } = useUserStore();

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
          date={new Date(user.birthdate)}
          onDateChange={setBirthdate}
          maximumDate={new Date("2005-12-31")}
          minimumDate={new Date("1945-01-01")}
          dividerColor="#EDEDEC"
        />
      </View>
      <MainBtn
        text="다음"
        onClick={() => {
          router.push("formgender");
        }}
        isAbled={false}
      />
    </View>
  );
};

export default FormBirth;
