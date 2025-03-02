import Custom from "@/styles/Custom";
import ModalStyle from "@/styles/ModalStyle";
import React, { useEffect } from "react";
import {
  BackHandler,
  DeviceEventEmitter,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import backgroundServer from "react-native-background-actions";
import {
  hideFloatingBubble,
  initialize,
  requestPermission,
  showFloatingBubble,
} from "react-native-floating-bubble-plugin";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatStartModal = ({ setModalOpen }: ModalProps) => {
  useEffect(() => {
    // 플로팅 버튼 권한 부여 및 초기화
    requestPermission()
      .then(() => console.log("permission Granted"))
      .catch(() => console.log("permission is not granted"));

    initialize().then(() => console.log("bubble 초기화"));
  }, []);

  // 백그라운드 - 음성 대화
  const startBackChat = async () => {
    const task = async () => {
      console.log("음성 대화 시작");
      while (backgroundServer.isRunning()) {
        // 음성 대화 코드 추가
        console.log("음성 대화 중");
        await new Promise((res) => setTimeout(res, 3000)); // 예시: 3초 대기
      }
    };

    const options = {
      taskName: "drivemate",
      taskTitle: "Chatting Active",
      taskDesc: "대화 중입니다.",
      taskIcon: {
        name: "ic_launcher",
        type: "mipmap",
      },
      color: "#ff5733",
      linkingURI: "drivemate://endchat",
    };

    try {
      await backgroundServer.start(task, options);
      console.log("bg 작업 성공");
    } catch (err) {
      console.error("bg 작업 실패", err);
    }
  };

  // 대화 시작하기 버튼 눌렀을 때
  const handleStart = async () => {
    setModalOpen(false);

    await showFloatingBubble(800, 1500);
    console.log("bubble added");

    // bg 대화 시작
    startBackChat();

    BackHandler.exitApp();
  };

  // bubble 눌렀을 때
  DeviceEventEmitter.addListener("floating-bubble-press", (e) => {
    hideFloatingBubble().then(() => console.log("bubble 삭제"));
    Linking.openURL("drivemate://endchat"); // 이름 중복되면 오류남
    backgroundServer.stop().then(() => console.log("bg 작업 중단"));
  });

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
            source={require("../../assets/images/close.png")}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center", gap: 32, paddingTop: 24 }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../../assets/images/star.png")}
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
            <Text style={ModalStyle.closebtn}>닫기</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleStart}>
            <Text style={ModalStyle.startbtn}>대화 시작하기</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ChatStartModal;
