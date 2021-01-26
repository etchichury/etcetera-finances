import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { InfoColumn, InfoHeader, InfoValue } from "../InfoColumn";

export const BasicInfoCard = () => {
  return (
    <div className="border border-black-300 bg-white ml-28 mr-12 mt-6 rounded-lg p-10 flex flex-row justify-between">
      <InfoColumn>
        <InfoHeader Icon={FaMoneyBill} title="Total balance" />
        <InfoValue valueStyle="text-2xl font-bold" value={17928.63} />
      </InfoColumn>
      <InfoColumn>
        <InfoHeader Icon={MdArrowDownward} title="Income" />
        <InfoValue valueStyle="text-xl" value={5229.13} />
      </InfoColumn>
      <InfoColumn>
        <InfoHeader Icon={MdArrowUpward} title="Outgoing" />
        <InfoValue valueStyle="text-xl" value={2348.75} />
      </InfoColumn>
    </div>
  );
};
