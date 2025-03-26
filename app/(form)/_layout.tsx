import Header from "@/components/Header";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const FormLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <Header left="<-" title="회원가입" style="header" />
      <Slot />
    </>
  );
};

export default FormLayout;
