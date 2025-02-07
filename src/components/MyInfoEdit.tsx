import { Image, Text, TouchableOpacity, View } from "react-native";
import { InfoItem } from "../models/user.model";
import Custom from "@/styles/Custom";
import { router } from "expo-router";

type InfoProps = {
  info: InfoItem;
};

const MyInfoEdit = ({ info }: InfoProps) => {
  const title = info.title;

  const onClick = (title: string) => {
    switch (title) {
      case "이름":
        router.push("/editname");
        break;
      case "대화모드":
        router.push("/editmode");
        break;
      case "직업":
        router.push("/editjob");
        break;
      case "취미 및 관심사":
        router.push("/edithobby");
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => onClick(title)}
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          gap: 6,
          paddingVertical: 5,
        }}
      >
        <Text style={Custom.myTitle}>{title}</Text>
        <Text
          style={{
            fontFamily: "Pretendard-Regular",
            color: "#8D8D8A",
            fontSize: 10,
          }}
        >
          {info.value}
        </Text>
      </View>
      {info.canedit && (
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../assets/images/forward.png")}
        />
      )}
    </TouchableOpacity>
  );
};

export default MyInfoEdit;
