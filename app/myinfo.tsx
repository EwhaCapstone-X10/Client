import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import Header from "@/components/Header";
import Custom from "@/styles/Custom";
import { User, InfoItem } from "@/models/user.model";
import MyInfoEdit from "@/components/MyInfoEdit";
import NavBar from "@/components/NavBar";
import { getUserInfo } from "@/api/user.api";

const mockData: User = {
  memberId: 0,
  name: "안수이",
  birthdate: new Date("2001-02-18"),
  sex: "FEMALE",
  occupation: "학생",
  interests: ["자전거", "서핑", "볼링", "테니스", "야구"],
  mode: "FORMAL",
};

const MyInfo = () => {
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
    /* 백에서 user 정보 가져오기
    const fetchUser = async () => {
      try {
        const res = await getUserInfo();
        const data = res.data;
        console.log(res);
        if (res.status === 200) {
          setInfoList((prevInfoList) =>
            prevInfoList.map((info) => {
              switch (info.title) {
                case "이름":
                  return { ...info, value: data.name };
                case "나이":
                  return { ...info, value: data.birthdate };
                case "성별":
                  return { ...info, value: data.sex };
                case "대화모드":
                  return { ...info, value: data.mode };
                case "직업":
                  return { ...info, value: data.occupation };
                case "취미 및 관심사":
                  return { ...info, value: data.hobby.join(", ") };
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

    fetchUser()
    */

    setInfoList((prevInfoList) =>
      prevInfoList.map((info) => {
        switch (info.title) {
          case "이름":
            return { ...info, value: mockData.name };
          case "생년월일":
            return { ...info, value: mockData.birthdate.toLocaleDateString() };
          case "성별":
            return {
              ...info,
              value: mockData.sex === "FEMALE" ? "여성" : "남성",
            };
          case "대화모드":
            return {
              ...info,
              value: mockData.mode === "FORMAL" ? "존댓말" : "반말",
            };
          case "직업":
            return { ...info, value: mockData.occupation };
          case "취미 및 관심사":
            return { ...info, value: mockData.interests.join(", ") };
          default:
            return info;
        }
      })
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
            },
          ]}
        >
          <TouchableOpacity>
            <Text style={Custom.myTitle}>이용약관</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Custom.myTitle}>고객센터</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Custom.myTitle}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NavBar type={"my"} />
    </View>
  );
};

export default MyInfo;
