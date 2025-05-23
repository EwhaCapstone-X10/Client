import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import EditBtn from "@/components/button/EditBtn";
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
          style={[Custom.input, focus && { borderBottomColor: "#988BFD" }]}
        />
      </View>
      <EditBtn isAbled={!user.occupation} />
    </View>
  );
};

export default EditJob;
