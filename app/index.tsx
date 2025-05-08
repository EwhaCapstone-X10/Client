import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("entry");
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

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
    </View>
  );
};

export default Splash;
