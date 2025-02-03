import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const KebabModal = ({ setModalOpen, id }: ModalProps) => {
  const handleDelete = async () => {};

  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          top: 120,
          right: 32,
          padding: 16,
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 6,
        }}
      >
        <TouchableOpacity onPress={handleDelete}>
          <Text style={{ fontFamily: "Pretendard-Regular", fontSize: 12 }}>
            삭제하기
          </Text>
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
