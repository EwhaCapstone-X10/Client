import useUserStore from "@/store/userStore";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  isAbled: boolean;
  onClick: () => void;
};

const EditBtn = ({ isAbled, onClick }: ButtonProps) => {
  const { user } = useUserStore();

  const handleComplete = () => {
    onClick();

    /* 버튼 클릭 시 백에 정보 보내기
    try {
      const res = await postUserInfo(user);
      console.log(res);

      if (res.status === 200) {
        router.push("main");
      }
    } catch (err: any) {
      if (err.response.statue === 400 || err.response.status === 500) {
        console.log("error: ", err.response.data.error);
      } else {
        console.log(err);
      }
    } */

    router.push("myinfo");
  };

  return (
    <View style={Custom.view}>
      <TouchableOpacity
        style={[
          {
            alignItems: "center",
            width: "100%",
            paddingVertical: 12,
            borderRadius: 12,
          },
          isAbled
            ? { backgroundColor: "#DFDEDA" }
            : { backgroundColor: "#5299FF" },
        ]}
        onPress={handleComplete}
        disabled={isAbled}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Pretendard-SemiBold",
            fontSize: 12,
          }}
        >
          완료
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditBtn;
