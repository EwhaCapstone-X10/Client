import MainBtn from "@/components/MainBtn";
import Custom from "@/styles/Custom";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const EditJob = () => {
  const [job, onChangeJob] = useState("");
  const [focus, setFocus] = useState(false);
  const handleComplete = () => {
    // 버튼 클릭 시 백에 정보 보내거나 localstorage에 저장
    router.push("myinfo");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 12,
          },
        ]}
      >
        <Text style={Custom.myTitle}>직업</Text>

        <TextInput
          onChangeText={onChangeJob}
          value={job}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#5299FF" }]}
        />
      </View>
      <MainBtn text="완료" onClick={handleComplete} isAbled={!job} />
    </View>
  );
};

export default EditJob;
