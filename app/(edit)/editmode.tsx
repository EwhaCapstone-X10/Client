import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Custom from "@/styles/Custom";
import { Gender } from "@/models/user.model";
import GenderBtn from "@/components/GenderBtn";
import EditBtn from "@/components/EditBtn";
import useUserStore from "@/store/userStore";

const EditMode = () => {
  const { user, setMode } = useUserStore();

  const [modes, setModes] = useState<Gender[]>([
    { id: 0, title: "반말", type: "CASUAL", isClicked: false },
    { id: 1, title: "존댓말", type: "FORMAL", isClicked: false },
  ]);

  const onClickMode = (id: number) => {
    setModes(
      modes.map((mode) =>
        mode.id === id
          ? { ...mode, isClicked: true }
          : { ...mode, isClicked: false }
      )
    );
  };

  useEffect(() => {
    const selectedMode = modes.find((mode) => mode.type === user.mode);
    setModes(
      modes.map((mode) =>
        mode.id === selectedMode.id
          ? { ...mode, isClicked: true }
          : { ...mode, isClicked: false }
      )
    );
  }, []);

  useEffect(() => {
    const selectedMode = modes.find((mode) => mode.isClicked);
    if (selectedMode) setMode(selectedMode.type);
  }, [modes]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          Custom.leftview,
          {
            flex: 1,
            gap: 16,
          },
        ]}
      >
        <Text style={Custom.myTitle}>대화모드</Text>
        <GenderBtn genders={modes} onClick={onClickMode} />
      </View>
      <EditBtn isAbled={false} />
    </View>
  );
};

export default EditMode;
