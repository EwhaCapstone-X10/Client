import { StyleSheet } from "react-native";

const ChatStyle = StyleSheet.create({
  chatview: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 12,
  },

  bubble: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 10,
    lineHeight: 16,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxWidth: 260,
  },
});
export default ChatStyle;
