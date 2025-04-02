import Custom from "@/styles/Custom";
import ModalStyle from "@/styles/ModalStyle";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatStartModal = ({ setModalOpen }: ModalProps) => {
  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={ModalStyle.bottomoutside}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={ModalStyle.bottom}
      >
        <TouchableOpacity
          onPress={() => setModalOpen(false)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require("../../../assets/images/close.png")}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center", gap: 32, paddingTop: 24 }}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("../../../assets/images/bubble.png")}
          />

          <View style={{ alignItems: "center", gap: 8 }}>
            <Text
              style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 13,
              }}
            >
              개인 맞춤형 대화를 시작하시겠습니까?
            </Text>
            <Text style={Custom.description}>졸음 운전을 예방해보세요 !</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 4,
          }}
        >
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text style={ModalStyle.closebtn}>닫기</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("voicechat")}>
            <Text style={ModalStyle.startbtn}>대화 시작하기</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ChatStartModal;
