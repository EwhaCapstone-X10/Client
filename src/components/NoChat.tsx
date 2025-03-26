import { Image, Text, View } from "react-native";
import Custom from "@/styles/Custom";

const NoChat = () => {
  return (
    <View style={{ alignItems: "center", paddingTop: 50, gap: 12 }}>
      <Text
        style={{
          fontFamily: "Pretendard-SemiBold",
          fontSize: 12,
          color: "#6A6967",
        }}
      >
        주고받은 대화 내역이 없습니다
      </Text>
      <Text style={Custom.description}>AI와 음성 대화를 나눠보세요 !</Text>
    </View>
  );
};

export default NoChat;
