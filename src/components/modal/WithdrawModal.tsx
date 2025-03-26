import ModalStyle from "@/styles/ModalStyle";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const WithdrawModal = ({ setModalOpen }: ModalProps) => {
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
            회원 탈퇴 하시겠습니까?
          </Text>
          <Text
            style={{
              fontFamily: "Pretendard-SemiBold",
              fontSize: 12,
            }}
          >
            탈퇴 시 정보를 되돌릴 수 없습니다.
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
          <TouchableOpacity>
            <Text
              style={[
                ModalStyle.logoutbtn,
                {
                  backgroundColor: "#FF6666",
                },
              ]}
            >
              회원탈퇴
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalOpen(false)}>
            <Text style={ModalStyle.cancelbtn}>취소</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default WithdrawModal;
