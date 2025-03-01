import { Chat } from "@/models/chatting.model";
import React from "react";
import { ScrollView, Text, View } from "react-native";

type BubbleProps = {
  chatting: Chat[];
};

const ChatBubble = ({ chatting }: BubbleProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {chatting.map((item) => (
        <View
          key={item.idx}
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: item.idx % 2 === 0 ? "flex-start" : "flex-end",
            marginBottom: 12,
          }}
        >
          <Text
            style={[
              {
                fontFamily: "Pretendard-SemiBold",
                fontSize: 10,
                lineHeight: 16,
                borderRadius: 24,
                paddingHorizontal: 16,
                paddingVertical: 8,
                maxWidth: 260,
                backgroundColor: item.idx % 2 === 0 ? "#EDEDEC" : "#5299FF",
                color: item.idx % 2 === 0 ? "black" : "white",
              },
            ]}
          >
            {item.chat}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ChatBubble;
