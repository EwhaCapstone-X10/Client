import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  termsList,
  termsOfService1,
  termsOfService2,
  termsOfService3,
} from "@/utils/termsOfSerivces";
import Custom from "@/styles/Custom";
import WithdrawModal from "@/components/modal/WithdrawModal";

const UserPolicy = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Custom.scrollview}
      >
        {/* 이용약관 */}
        <View style={Custom.borderbottom}>
          <Text style={Custom.myTitle}>
            1. 비즈니스 파트너 개인정보 처리방침
          </Text>
          <Text style={Custom.description}>{termsOfService1}</Text>
        </View>

        <View style={Custom.borderbottom}>
          <Text style={Custom.myTitle}>2. 개인정보 수집</Text>
          <Text style={Custom.description}>{termsOfService2}</Text>
        </View>

        <View style={Custom.borderbottom}>
          <Text style={Custom.myTitle}>3. 개인정보 이용</Text>
          <Text style={Custom.description}>{termsOfService3}</Text>
          <View>
            {termsList.map((term, index) => (
              <Text key={index} style={Custom.description}>
                • {term}
              </Text>
            ))}
          </View>
        </View>

        {/* 탈퇴 */}
        <TouchableOpacity
          style={{ paddingBottom: 12 }}
          onPress={() => setModalOpen(true)}
        >
          <Text style={Custom.myTitle}>회원탈퇴</Text>
        </TouchableOpacity>
      </ScrollView>
      {modalOpen && <WithdrawModal setModalOpen={setModalOpen} />}
    </>
  );
};

export default UserPolicy;
