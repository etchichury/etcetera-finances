import React from "react";
import { BasicInfoCard } from "../../components/BasicInfoCard";
import { Header } from "../../components/Header/index";
import { MenuBar } from "../../components/MenuBar";

export const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <MenuBar />
      <BasicInfoCard />
    </div>
  );
};
