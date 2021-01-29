import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { InfoColumn, InfoHeader, InfoValue } from "../InfoColumn";
import { VerticalBarChart } from "../Charts/VerticalBar";
import { LineSeriesChart } from "../Charts/LineSeries";

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

export const BasicInfoCard = () => {
  return (
    <div className="border border-black-300 bg-white ml-28 mr-12 mt-6 rounded-lg p-10 flex flex-row justify-between">
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
  );
};
