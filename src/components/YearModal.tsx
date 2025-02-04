import ModalStyle from "@/styles/ModalStyle";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
};

const YearModal = ({ setModalOpen, setSelectedYear }: ModalProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const yearList = [year, year - 1, year - 2, year - 3, year - 4];

  const handleClickYear = (year: number) => {
    setSelectedYear(year);
    setModalOpen(false);
  };

  return (
    <TouchableOpacity
      onPress={() => setModalOpen(false)}
      style={ModalStyle.outside}
    >
      <TouchableOpacity
        onPress={(e) => e.stopPropagation()}
        style={ModalStyle.year}
      >
        {yearList.map((year, idx) => (
          <TouchableOpacity key={idx} onPress={() => handleClickYear(year)}>
            <Text style={ModalStyle.itemtext}>{year}</Text>
          </TouchableOpacity>
        ))}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default YearModal;
