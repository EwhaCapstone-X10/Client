import { useEffect, useState } from "react";
import {
  BackHandler,
  DeviceEventEmitter,
  Image,
  ImageSourcePropType,
  Linking,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NavBtn from "./NavBtn";
import {
  hideFloatingBubble,
  initialize,
  requestPermission,
  showFloatingBubble,
} from "react-native-floating-bubble-plugin";
import backgroundServer from "react-native-background-actions";

type NavProps = {
  type: string;
};

export type Nav = {
  title: string;
  isBlue: boolean;
  graysrc: ImageSourcePropType;
  bluesrc: ImageSourcePropType;
};

const NavBar = (props: NavProps) => {
  const [home, setHome] = useState<Nav>({
    title: "홈",
    isBlue: false,
    graysrc: require("../../assets/images/home_gray.png"),
    bluesrc: require("../../assets/images/home_blue.png"),
  });

  const [my, setMy] = useState<Nav>({
    title: "내 정보",
    isBlue: false,
    graysrc: require("../../assets/images/user_gray.png"),
    bluesrc: require("../../assets/images/user_blue.png"),
  });

  const plusSrc = require("../../assets/images/plus.png");

  useEffect(() => {
    if (props.type === "home") {
      setHome({ ...home, isBlue: true });
      setMy({ ...my, isBlue: false });
    } else if (props.type === "my") {
      setMy({ ...my, isBlue: true });
      setHome({ ...home, isBlue: false });
    }

    // 플로팅 버튼 권한 부여 및 초기화
    requestPermission()
      .then(() => console.log("permission Granted"))
      .catch(() => console.log("permission is not granted"));

    initialize().then(() => console.log("bubble 초기화"));
  }, [props.type]);

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
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        padding: 8,
        justifyContent: "space-between",
      }}
    >
      {/* 홈 */}
      <View>
        <NavBtn type={home} nav="main" />
      </View>

      {/* Plus */}
      <TouchableOpacity
        style={{ flex: 0, alignItems: "center" }}
        onPress={handleStart}
      >
        <Image style={{ width: 70, height: 70 }} source={plusSrc} />
      </TouchableOpacity>

      {/* 내 정보 */}
      <NavBtn type={my} nav="myinfo" />
    </View>
  );
};

export default NavBar;
