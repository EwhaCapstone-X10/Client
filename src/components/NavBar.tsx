import { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NavBtn from "./button/NavBtn";
import ChatStartModal from "./modal/ChatStartModal";

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

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (props.type === "home") {
      setHome({ ...home, isBlue: true });
      setMy({ ...my, isBlue: false });
    } else if (props.type === "my") {
      setMy({ ...my, isBlue: true });
      setHome({ ...home, isBlue: false });
    }
  }, [props.type]);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        padding: 8,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
      }}
    >
      {/* 홈 */}
      <View>
        <NavBtn type={home} nav="main" />
      </View>

      {/* Plus */}
      <TouchableOpacity
        style={{ flex: 0, alignItems: "center" }}
        onPress={() => setModalOpen(true)}
      >
        <Image style={{ width: 70, height: 70 }} source={plusSrc} />
      </TouchableOpacity>

      {/* 내 정보 */}
      <NavBtn type={my} nav="myinfo" />

      {/* 대화 여부 모달창 */}
      {modalOpen && <ChatStartModal setModalOpen={setModalOpen} />}
    </View>
  );
};

export default NavBar;
