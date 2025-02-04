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
});

export default ModalStyle;
