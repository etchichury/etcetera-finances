import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { InfoColumn } from "../InfoColumn";

export const BasicInfoCard = () => {
  return (
    <div className="border border-black-300 bg-white ml-28 mr-12 mt-6 rounded-lg p-4 flex flex-row justify-between">
      <InfoColumn Icon={FaMoneyBill} title="Total balance" />
      <InfoColumn Icon={MdArrowDownward} title="Income" />
      <InfoColumn Icon={MdArrowUpward} title="Outgoing" />
    </div>
  );
};
