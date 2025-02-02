import { StyleSheet } from "react-native";

const Custom = StyleSheet.create({
  view: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  leftview: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },

  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 16,
    lineHeight: 26,
  },

  description: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 10,
    lineHeight: 26,
    color: "#6A6967",
  },

  logo: {
    fontFamily: "Jalnan",
    fontSize: 28,
    color: "#3182F6",
  },

  inputinfo: {
    width: "100%",
    fontSize: 12,
    fontFamily: "Pretendard-Regular",
  },

  input: {
    width: "100%",
    fontFamily: "Pretendard-Regular",
    fontSize: 16,
    borderBottomColor: "#6A6967",
    borderBottomWidth: 1,
    paddingVertical: 4,
  },

  genderbtn: {
    alignItems: "center",
    paddingVertical: 10,
    minWidth: 140,
    borderRadius: 8,
    borderColor: "#ededec",
    borderWidth: 1,
  },

  myTitle: {
    fontSize: 12,
    fontFamily: "Pretendard-SemiBold",
  },
});
export default Custom;
