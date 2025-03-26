import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

const Splash = () => {
  /*useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Entry');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  */

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <StatusBar backgroundColor="#ffffff" />

      <Text
        style={{
          fontFamily: "Jalnan",
          color: "#988BFD",
          fontSize: 40,
          textAlign: "center",
        }}
      >
        DRIVEMATE
      </Text>

      <Link
        href={{
          pathname: "/entry",
        }}
      >
        <Text>entry</Text>
      </Link>

      <Link
        href={{
          pathname: "/main",
        }}
      >
        <Text>main</Text>
      </Link>

      <Link
        href={{
          pathname: "/voicechat",
        }}
      >
        <Text>voicechat</Text>
      </Link>

      <Link
        href={{
          pathname: "/kakao",
        }}
      >
        <Text>kakao</Text>
      </Link>
    </View>
  );
};

export default Splash;
