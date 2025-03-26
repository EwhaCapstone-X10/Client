import { postUserInfo } from "@/api/user.api";
import useUserStore from "@/store/userStore";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  isAbled: boolean;
};

const EditBtn = ({ isAbled }: ButtonProps) => {
  const { user } = useUserStore();

  const handleComplete = async () => {
    try {
      const res = await postUserInfo(user);
      if (res.status === 200) {
        router.push("myinfo");
      }
    } catch (err: any) {
      if (err.response.status === 400 || err.response.status === 500) {
        console.log("error: ", err.response.data.error);
      } else {
        console.log(err);
      }
    }
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
            : { backgroundColor: "#988BFD" },
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
