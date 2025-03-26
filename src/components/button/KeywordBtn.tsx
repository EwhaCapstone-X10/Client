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
      {keywords.map((item, idx) => (
        <View
          key={idx}
          style={{
            borderRadius: 20,
            backgroundColor: "#F4F3FF",
            paddingVertical: 7,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontFamily: "Pretendard-SemiBold",
              fontSize: 10,
              color: "#988BFD",
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
