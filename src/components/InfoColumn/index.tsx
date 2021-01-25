import React from "react";
import { IconType } from "react-icons";

type InfoProps = {
  Icon: IconType;
  title: string;
};

export const InfoColumn = ({ Icon, title }: InfoProps) => {
  return (
    <div className="flex flex-column">
      <div className="flex flex-row text-2xl font-semibold">
        <Icon className="self-center mr-4" size={24} /> <h1>{title}</h1>
      </div>
    </div>
  );
};
