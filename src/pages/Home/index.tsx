import React from "react";
import { BasicInfoCard } from "../../components/BasicInfoCard";
import { Header } from "../../components/Header/index";
import { MenuBar } from "../../components/MenuBar";
import { SpendingTile } from "../../components/SpendingTile";
import Carousel, { RenderArrowProps } from "react-elastic-carousel";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

export const Home = () => {
  const carouselArrows = ({ type, onClick, isEdge }: RenderArrowProps) => {
    const pointer =
      type === "PREV" ? (
        <BsChevronCompactLeft size={36} />
      ) : (
        <BsChevronCompactRight size={36} />
      );
    return (
      // This use of style is due to focus:outline-none not working
      <button onClick={onClick} disabled={isEdge} style={{ outline: 0 }}>
        {pointer}
      </button>
    );
  };

  return (
    <div className="bg-gray-100 h-full min-h-screen">
      <Header />
      <MenuBar currentPage="home" />
      <div className="ml-16">
        <BasicInfoCard />
        <h3 className="mt-16 ml-10 mb-6 text-3xl font-medium">
          Latest spendings
        </h3>
        <Carousel itemsToShow={7} isRTL={false} renderArrow={carouselArrows}>
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
          <SpendingTile />
        </Carousel>
      </div>
    </div>
  );
};
