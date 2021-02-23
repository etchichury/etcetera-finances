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
  value: string;
};

export const InfoHeader = ({ Icon, title }: HeaderProps) => {
  return (
    <div className="flex flex-row mb-4">
      <Icon className="self-center mr-2" size={32} />{" "}
      <div className="text-2xl font-semibold">{title}</div>
    </div>
  );
};

export const InfoValue = ({ valueStyle, value }: ValueProps) => {
  return <div className={`${valueStyle} mb-6`}>R$ {value}</div>;
};

export const InfoColumn = ({ children }: InfoProps) => {
  return <div className="flex flex-col w-1/3 h-96">{children}</div>;
};
