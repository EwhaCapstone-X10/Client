import { View, TouchableOpacity, Text } from "react-native";
import { Gender } from "../../models/user.model";
import Custom from "@/styles/Custom";

type GenderProps = {
  genders: Gender[];
  onClick: (id: number) => void;
};

const GenderBtn = (props: GenderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        gap: 32,
        paddingVertical: 12,
      }}
    >
      {props.genders.map((gender) => (
        <TouchableOpacity
          key={gender.id}
          onPress={() => props.onClick(gender.id)}
          style={[
            Custom.genderbtn,
            {
              borderColor: gender.isClicked ? "#988BFD" : "#DFDEDA",
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: 9,
              color: gender.isClicked ? "#988BFD" : "black",
            }}
          >
            {gender.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GenderBtn;
