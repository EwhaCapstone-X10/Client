import ChatSummary from "@/components/ChatSummary";
import NoChat from "@/components/NoChat";
import YearModal from "@/components/modal/YearModal";
import { Summary } from "@/models/chatting.model";
import Custom from "@/styles/Custom";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getChatListYear } from "@/api/chat.api";

const ChattingList = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [modalOpen, setModalOpen] = useState(false);
  const [chattingData, setChattingData] = useState<Summary[]>([]);

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const res = await getChatListYear(1, selectedYear);
        if (res.status === 200) {
          setChattingData(res.data.result);
        }
      } catch (err: any) {
        if (err.response.statue === 400 || err.response.status === 500) {
          console.log("error: ", err.response.data.error);
        } else {
          console.log(err);
        }
      }
    };

    fetchChatList();
  }, [selectedYear]);

  return (
    <View style={[Custom.leftview, { flex: 1, gap: 20 }]}>
      <TouchableOpacity
        onPress={() => setModalOpen(true)}
        style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}
      >
        <Text
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 11,
            color: "#4E4C49",
          }}
        >
          {selectedYear}
        </Text>
        <Image
          source={require("../../assets/images/drop_down.png")}
          style={{ width: 22, height: 22 }}
        />
      </TouchableOpacity>

      {chattingData.length > 0 ? (
        chattingData.map((item, idx) => (
          <ChatSummary key={idx} item={item} idx={idx} />
        ))
      ) : (
        <NoChat />
      )}
      {modalOpen && (
        <YearModal
          setModalOpen={setModalOpen}
          setSelectedYear={setSelectedYear}
        />
      )}
    </View>
  );
};
export default ChattingList;
