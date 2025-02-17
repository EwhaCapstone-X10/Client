import React, { useState, useCallback } from "react";
import { Text, View, Alert } from "react-native";
import Custom from "@/styles/Custom";
import { Stretching } from "@/models/video.model";
import YoutubePlayer from "react-native-youtube-iframe";

type StretchingProps = {
  item: Stretching;
  width: number;
  height: number;
};

const StretchingVideo = ({ item, width, height }: StretchingProps) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("영상이 종료되었습니다");
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: width,
        }}
      >
        <YoutubePlayer
          height={height}
          play={playing}
          videoId={item.src}
          onChangeState={onStateChange}
        />
      </View>
      <Text style={Custom.myTitle}>{item.title}</Text>
      <Text style={Custom.description}>{item.source}</Text>
    </View>
  );
};

export default StretchingVideo;
