import ModalStyle from "@/styles/ModalStyle";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { logout } from "@react-native-seoul/kakao-login";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogoutModal = ({ setModalOpen }: ModalProps) => {
  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      console.log(message);
      AsyncStorage.clear();
      router.push("/");
    } catch (err) {
      console.error("로그아웃 실패", err);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={ModalStyle.outside}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={ModalStyle.logout}
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
        <View style={{ alignItems: "center", paddingTop: 24 }}>
          <Text
            style={{
              fontFamily: "Pretendard-SemiBold",
              fontSize: 12,
            }}
          >
            로그아웃 하시겠습니까?
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 4,
          }}
        >
          <TouchableOpacity onPress={signOutWithKakao}>
            <Text style={ModalStyle.logoutbtn}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text style={ModalStyle.cancelbtn}>취소</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default LogoutModal;
