import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import EditBtn from "@/components/EditBtn";
import Custom from "@/styles/Custom";
import useUserStore from "@/store/userStore";

const EditJob = () => {
  const [focus, setFocus] = useState(false);
  const { user, setOccupation } = useUserStore();

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
          onChangeText={setOccupation}
          value={user.occupation}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#5299FF" }]}
        />
      </View>
      <EditBtn isAbled={!user.occupation} onClick={() => {}} />
    </View>
  );
};

export default EditJob;
