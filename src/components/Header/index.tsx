import React from "react";
import person from "../../assets/willson.jpeg";

const Profile = () => {
  return (
    <div className="h-14 px-4 mr-2 rounded-md flex justify-center cursor-pointer hover:shadow-lg hover:bg-gray-100 self-center">
      <div className="pr-4 felx self-center">Juliana Willson</div>
      <img
        className="w-12 h-12 rounded-full object-cover flex self-center"
        alt=""
        src={person}
      />
    </div>
  );
};

export const Header = () => {
  return (
    <div className="bg-white h-16 shadow-sm flex justify-between">
      <div className="text-4xl font-bold text-primary-700 tracking-tight pl-2 self-center">
        Etcetera Finances
      </div>
      <Profile />
    </div>
  );
};
