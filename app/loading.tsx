import React from "react";
import { Image, Text, View } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../assets/images/loading.gif")}
      />
    </View>
  );
};

export default Loading;
