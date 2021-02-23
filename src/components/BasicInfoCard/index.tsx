import React, { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { InfoColumn, InfoHeader, InfoValue } from "../InfoColumn";
import { VerticalBarChart } from "../Charts/VerticalBar";
import { LineSeriesChart } from "../Charts/LineSeries";
import { IconType } from "react-icons/lib";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const balanceData = [
  { x: "Jan", y: 200 },
  { x: "Feb", y: 498.62 },
  { x: "Mar", y: 308.23 },
  { x: "Apr", y: 1223.3 },
  { x: "May", y: 2002.84 },
  { x: "Jun", y: 3455.07 },
];

const incomeData = [
  { x: 2017, y: 0 },
  { x: 2018, y: 400 },
  { x: 2019, y: 800 },
  { x: 2020, y: 1525.3 },
  { x: 2021, y: 5229.13 },
];

const outgoingData = [
  { x: "Jan", y: 2000.02 },
  { x: "Feb", y: 2342.62 },
  { x: "Mar", y: 2984.23 },
  { x: "Apr", y: 2223.3 },
  { x: "May", y: 2002.84 },
  { x: "Jun", y: 2455.07 },
];

type ShowMoneyProps = {
  Icon: IconType;
};

export const BasicInfoCard = () => {
  const [closeEye, setCloseEye] = useState(false);

  const ShowMoneyButton = ({ Icon }: ShowMoneyProps) => {
    return (
      <button
        className="absolute top-5 right-5 max-h-full"
        onClick={() => setCloseEye(!closeEye)}
        style={{ outline: 0 }}
      >
        {<Icon size={30} />}
      </button>
    );
  };

  return (
    <div className="relative border bg-white ml-8 mr-8 mt-6 rounded-lg p-10 justify-between w-auto h-auto">
      <div className="flex flex-row">
        <InfoColumn>
          <InfoHeader Icon={FaMoneyBill} title="Total balance" />
          <InfoValue
            valueStyle="text-3xl font-bold"
            value={(17928.63).toLocaleString("en")}
          />
          <VerticalBarChart data={balanceData} color="#14D2ED" />
        </InfoColumn>
        <InfoColumn>
          <InfoHeader Icon={MdArrowDownward} title="Income" />
          <InfoValue
            valueStyle="text-2xl font-semibold"
            value={(5229.13).toLocaleString("en")}
          />
          <LineSeriesChart data={incomeData} color="#1F41F7" />
        </InfoColumn>
        <InfoColumn>
          <InfoHeader Icon={MdArrowUpward} title="Outgoing" />
          <InfoValue
            valueStyle="text-2xl font-semibold"
            value={(2348.75).toLocaleString("en")}
          />
          <VerticalBarChart data={outgoingData} color="#FB3030" />
        </InfoColumn>
      </div>
      {closeEye ? (
        <ShowMoneyButton Icon={BsEyeFill} />
      ) : (
        <ShowMoneyButton Icon={BsEyeSlashFill} />
      )}
    </div>
  );
};
