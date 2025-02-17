import { deleteChat } from "@/api/chat.api";
import ModalStyle from "@/styles/ModalStyle";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
};

const KebabModal = ({ setModalOpen, id }: ModalProps) => {
  const handleDelete = async () => {
    /*
    try {
      const res = await deleteChat(id);
      console.log(res);
      if (res.status === 200) {
      }
    } catch (err: any) {
      if (err.response.statue === 400 || err.response.status === 500) {
        console.log("error: ", err.response.data.error);
      } else {
        console.log(err);
      }
    } finally {
      setModalOpen(false);
    } */
    setModalOpen(false);
  };

  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={ModalStyle.outside}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={ModalStyle.kebab}
      >
        <TouchableOpacity onPress={handleDelete}>
          <Text style={ModalStyle.itemtext}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalOpen(false)}>
          <Text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: 12,
              color: "red",
              marginTop: 10,
            }}
          >
            취소
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default KebabModal;
