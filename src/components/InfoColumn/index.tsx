import React from "react";
import { IconType } from "react-icons/lib";

type InfoProps = {
  children: React.ReactNode;
};

type HeaderProps = {
  Icon: IconType;
  title: string;
};

type ValueProps = {
  valueStyle: string;
  value: number;
};

export const InfoHeader = ({ Icon, title }: HeaderProps) => {
  return (
    <div className="flex flex-row mb-2">
      <Icon className="self-center mr-2" size={32} />{" "}
      <div className="text-xl font-medium">{title}</div>
    </div>
  );
};

export const InfoValue = ({ valueStyle, value }: ValueProps) => {
  return <div className={valueStyle}>R$ {value}</div>;
};

export const InfoColumn = ({ children }: InfoProps) => {
  return <div className="flex flex-col">{children}</div>;
};
