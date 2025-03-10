import { Image, Text, View } from "react-native";
import Custom from "@/styles/Custom";

const NoChat = () => {
  return (
    <View style={{ alignItems: "center", gap: 28, paddingTop: 50 }}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("../../assets/images/paperplane.png")}
      />
      <View style={{ alignItems: "center", gap: 12 }}>
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
    </View>
  );
};

export default NoChat;
