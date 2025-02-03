import Header from "@/components/Header";
import { Slot } from "expo-router";
import React from "react";

const FormLayout = () => {
  return (
    <>
      <Header left="<-" title="drivemate" style="header" />
      <Slot />
    </>
  );
};

export default FormLayout;
