import { Chat } from "@/models/chatting.model";
import ChatStyle from "@/styles/ChatStyle";
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
          style={[
            ChatStyle.chatview,
            {
              justifyContent: item.idx % 2 === 0 ? "flex-start" : "flex-end",
            },
          ]}
        >
          <Text
            style={[
              ChatStyle.bubble,
              {
                backgroundColor: item.idx % 2 === 0 ? "#EDEDEC" : "#988BFD",
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
