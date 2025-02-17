import Custom from "@/styles/Custom";
import ModalStyle from "@/styles/ModalStyle";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatStartModal = ({ setModalOpen }: ModalProps) => {
  const handleStart = async () => {
    setModalOpen(false);

    // 대화 시작
  };

  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={{
        position: "absolute",
        top: -640,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={{
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
        }}
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
            source={require("../../assets/images/close.png")}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center", gap: 32, paddingTop: 24 }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../../assets/images/heart.png")}
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
            <Text style={Custom.description}>
              다른 앱 위에서 대화가 가능합니다 !
            </Text>
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
            <Text
              style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 12,
                backgroundColor: "#EDEDEC",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 32,
              }}
            >
              닫기
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleStart}>
            <Text
              style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 12,
                backgroundColor: "#5299FF",
                color: "white",
                paddingVertical: 12,
                paddingHorizontal: 54,
                borderRadius: 32,
              }}
            >
              대화 시작하기
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ChatStartModal;
