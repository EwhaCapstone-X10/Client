import { StyleSheet } from "react-native";

const ModalStyle = StyleSheet.create({
  outside: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  year: {
    position: "absolute",
    top: 40,
    left: 16,
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    gap: 16,
  },
  kebab: {
    position: "absolute",
    top: 120,
    right: 32,
    padding: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  itemtext: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
  },

  // 하단 모달창
  bottomoutside: {
    position: "absolute",
    top: -640,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    gap: 50,
  },

  closebtn: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
    backgroundColor: "#EDEDEC",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
  },

  startbtn: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
    backgroundColor: "#5299FF",
    color: "white",
    paddingVertical: 12,
    paddingHorizontal: 54,
    borderRadius: 32,
  },

  // 로그아웃 모달창
  logout: {
    position: "absolute",
    left: 25,
    bottom: 250,
    width: 310,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 16,
    gap: 30,
  },

  logoutbtn: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 10,
    backgroundColor: "#5299FF",
    color: "white",
    paddingVertical: 12,
    borderRadius: 32,
    textAlign: "center",
    minWidth: 125,
  },

  cancelbtn: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 10,
    backgroundColor: "#EDEDEC",
    paddingVertical: 12,
    borderRadius: 32,
    textAlign: "center",
    minWidth: 125,
  },
});

export default ModalStyle;
