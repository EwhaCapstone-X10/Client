import { Image, Text, TouchableOpacity, View } from "react-native";
import { Summary } from "../models/chatting.model";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import { getDate } from "@/utils/getDate";

type SummaryProps = {
  item: Summary;
};

const ChatSummary = ({ item }: SummaryProps) => {
  const date = getDate(item.started_at);
  const handleClick = () => {
    router.push(`chattingdetail/${item.session_id}`);
  };
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      {item.session_id % 2 === 0 ? (
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/images/note_blue.png")}
        />
      ) : (
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/images/note_sky.png")}
        />
      )}
      <View>
        <Text
          style={[Custom.myTitle, { maxWidth: 254 }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.summary}
        </Text>
        <Text style={Custom.description}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatSummary;
