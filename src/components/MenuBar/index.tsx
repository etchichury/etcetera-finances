import React from "react";
import { IconType } from "react-icons/lib";
import { BsHouse, BsGrid, BsGear } from "react-icons/bs";
import { FaWallet, FaChartBar } from "react-icons/fa";

type MenuBarProps = {
  currentPage: string;
};

type MenuButtonProps = {
  Icon: IconType;
  color: string;
  onClick: () => void;
};

const MenuButton = (props: MenuButtonProps) => {
  const hexColor = props.color === "bg-white" ? "" : "#1F41F7";
  return (
    <div className="flex flex-row w-full">
      <div className={`h-10 w-1 mr-2 ${props.color}`} />
      <button className="focus:outline-none">
        <props.Icon size={34} color={hexColor} />
      </button>
    </div>
  );
};

export const MenuBar = ({ currentPage }: MenuBarProps) => {
  const blue = "bg-primary-500";
  const white = "bg-white";

  return (
    <div className="bg-white w-16 h-full fixed top-0 pt-20 shadow-lg flex flex-col justify-between">
      <div className="space-y-8 flex flex-col items-center">
        <MenuButton
          Icon={BsHouse}
          color={currentPage === "home" ? blue : white}
          onClick={() => {}}
        />
        <MenuButton
          Icon={FaWallet}
          color={currentPage === "wallet" ? blue : white}
          onClick={() => {}}
        />
        <MenuButton
          Icon={FaChartBar}
          color={currentPage === "report" ? blue : white}
          onClick={() => {}}
        />
        <MenuButton
          Icon={BsGrid}
          color={currentPage === "spendings" ? blue : white}
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <MenuButton
          Icon={BsGear}
          color={currentPage === "settings" ? blue : white}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
