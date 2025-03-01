import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import useUserStore from "@/store/userStore";
import EditBtn from "@/components/EditBtn";
import Custom from "@/styles/Custom";

const EditName = () => {
  const [focus, setFocus] = useState(false);
  const { user, setName } = useUserStore();

  return (
    <View style={{ flex: 1 }}>
      <View style={[Custom.leftview, { flex: 1, gap: 12 }]}>
        <Text style={Custom.myTitle}>이름</Text>
        <TextInput
          onChangeText={setName}
          value={user.name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          cursorColor="black"
          style={[Custom.input, focus && { borderBottomColor: "#5299FF" }]}
        />
      </View>

      <EditBtn isAbled={!user.name} />
    </View>
  );
};

export default EditName;
