import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Header from "@/components/Header";
import Custom from "@/styles/Custom";
import { InfoItem } from "@/models/user.model";
import MyInfoEdit from "@/components/MyInfoEdit";
import NavBar from "@/components/NavBar";
import { getUserInfo } from "@/api/user.api";
import useUserStore from "@/store/userStore";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const MyInfo = () => {
  const {
    setName,
    setBirthdate,
    setSex,
    setMode,
    setOccupation,
    setInterests,
  } = useUserStore();

  const [infoList, setInfoList] = useState<InfoItem[]>([
    {
      id: 0,
      title: "이름",
      value: "",
      canedit: true,
    },
    {
      id: 1,
      title: "생년월일",
      value: "",
      canedit: false,
    },
    {
      id: 2,
      title: "성별",
      value: "",
      canedit: false,
    },
    {
      id: 3,
      title: "대화모드",
      value: "",
      canedit: true,
    },
    {
      id: 4,
      title: "직업",
      value: "",
      canedit: true,
    },
    {
      id: 5,
      title: "취미 및 관심사",
      value: "",
      canedit: true,
    },
  ]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserInfo();
        const data = res.data.result;

        if (res.status === 200) {
          setInfoList((prevInfoList) =>
            prevInfoList.map((info) => {
              switch (info.title) {
                case "이름":
                  setName(data.name);
                  return { ...info, value: data.name };
                case "생년월일":
                  setBirthdate(data.birthdate);
                  return { ...info, value: data.birthdate };
                case "성별":
                  setSex(data.sex);
                  return {
                    ...info,
                    value: data.sex === "MALE" ? "남성" : "여성",
                  };
                case "대화모드":
                  setMode(data.mode);
                  return {
                    ...info,
                    value: data.mode === "CASUAL" ? "반말" : "존댓말",
                  };
                case "직업":
                  setOccupation(data.occupation);
                  return { ...info, value: data.occupation };
                case "취미 및 관심사":
                  setInterests(data.interests);
                  return { ...info, value: data.interests.join(", ") };
                default:
                  return info;
              }
            })
          );
        }
      } catch (err: any) {
        if (err.response.status === 400 || err.response.status === 500) {
          console.log("error: ", err.response.data.error);
        } else {
          console.log(err);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <StatusBar backgroundColor="#ffffff" />

      <Header left="<-" title="내 정보" style="header" />
      <ScrollView style={{ flex: 1, gap: 10 }}>
        <View
          style={[
            Custom.leftview,
            {
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: "#EDEDEC",
            },
          ]}
        >
          <Text style={Custom.description}>내 정보 관리</Text>
          {infoList.map((info) => (
            <MyInfoEdit key={info.id} info={info} />
          ))}
        </View>
        <View
          style={[
            Custom.leftview,
            {
              gap: 18,
              marginTop: 12,
            },
          ]}
        >
          <TouchableOpacity onPress={() => router.push("userpolicy")}>
            <Text style={Custom.myTitle}>이용약관</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavBar type={"my"} />
    </View>
  );
};

export default MyInfo;
