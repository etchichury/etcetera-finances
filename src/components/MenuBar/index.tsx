import React from "react";
import { IconType } from "react-icons/lib";
import { BsHouse, BsGrid, BsGear } from "react-icons/bs";
import { FaWallet, FaChartBar } from "react-icons/fa";

type MenuButtonProps = {
  Icon: IconType;
  onClick: () => void;
};

const MenuButton = (props: MenuButtonProps) => {
  return (
    <button className="focus:outline-none">
      <props.Icon size={34} />
    </button>
  );
};

export const MenuBar = () => {
  return (
    <div className="bg-white w-16 h-full fixed top-0 pt-20 shadow-lg flex flex-col justify-between">
      <div className="space-y-8 flex flex-col items-center">
        <MenuButton Icon={BsHouse} onClick={() => {}} />
        <MenuButton Icon={FaWallet} onClick={() => {}} />
        <MenuButton Icon={FaChartBar} onClick={() => {}} />
        <MenuButton Icon={BsGrid} onClick={() => {}} />
      </div>
      <div className="flex flex-col items-center mb-6">
        <MenuButton Icon={BsGear} onClick={() => {}} />
      </div>
    </div>
  );
};
