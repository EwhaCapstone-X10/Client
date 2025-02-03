import { View, Text } from "react-native";

type KeywordProps = {
  keywords: string[];
};

const KeywordBtn = ({ keywords }: KeywordProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {keywords.map((item) => (
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#E5EDFF",
            paddingVertical: 7,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Pretendard-SemiBold",
              fontSize: 10,
              color: "#3182F6",
            }}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default KeywordBtn;
