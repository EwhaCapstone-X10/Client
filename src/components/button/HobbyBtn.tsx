import { View, TouchableOpacity, Text } from "react-native";
import { Hobby } from "../../models/hobby.model";

type HobbyProps = {
  hobby: Hobby[];
  hobbies: string[];
  onClick: (title: string) => void;
};

const HobbyBtn = ({ hobbies, hobby, onClick }: HobbyProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        paddingHorizontal: 6,
      }}
    >
      {hobby.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onClick(item.title)}
          style={[
            {
              borderRadius: 20,
              borderColor: "#ededec",
              borderWidth: 1,
              paddingVertical: 7,
              paddingHorizontal: 18,
            },
            {
              borderColor: hobbies.includes(item.title) ? "#988BFD" : "#DFDEDA",
            },
          ]}
        >
          <Text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: 10,
              color: hobbies.includes(item.title) ? "#988BFD" : "black",
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HobbyBtn;
