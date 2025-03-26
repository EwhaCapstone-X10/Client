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
    paddingVertical: 4,
  },

  scrollview: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 16,
  },

  title: {
    color: "#333331",
    fontFamily: "Pretendard-Bold",
    fontSize: 14,
    lineHeight: 34,
  },

  title_m: {
    color: "#333331",
    fontFamily: "Pretendard-Bold",
    fontSize: 13,
    lineHeight: 32,
  },

  description: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 10,
    lineHeight: 26,
    color: "#6A6967",
  },

  logo: {
    fontFamily: "Jalnan",
    fontSize: 12,
    color: "#ffffff",
  },

  header: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
    color: "#333331",
  },

  inputinfo: {
    width: "100%",
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
    color: "#333331",
  },

  input: {
    width: "100%",
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
    borderBottomColor: "#6A6967",
    borderBottomWidth: 1,
    paddingVertical: 4,
    color: "#333331",
  },

  genderbtn: {
    alignItems: "center",
    paddingVertical: 10,
    minWidth: 140,
    borderRadius: 8,
    borderColor: "#ededec",
    borderWidth: 1,
  },

  kakaobtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#FFF48E",
    marginBottom: 8,
  },

  myTitle: {
    fontSize: 11,
    fontFamily: "Pretendard-SemiBold",
    color: "#333331",
  },

  borderbottom: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#C6C4C1",
  },
});
export default Custom;
