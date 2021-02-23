import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

export const SpendingTile = () => {
  return (
    <div className="bg-white border border-black-300 rounded-xl p-4 h-60 w-56">
      <div className="flex flex-row justify-between">
        <div className="uppercase font-medium tracking-widest text-xs">
          Leisure
        </div>
        <div className="flex flex-row space-x-2 justify-self-end">
          <BiPencil size={30} className="cursor-pointer" />
          <BsTrash size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="font-semibold text-2xl mt-2">Netflix</div>
      <div className="absolute bottom-2">
        <div className="mt-10 font-medium">Jan 3th 2021</div>
        <div className="font-medium">R$ 15,99</div>
      </div>
    </div>
  );
};
