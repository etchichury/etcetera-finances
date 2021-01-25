import React, { useState } from "react";
import person from "../../assets/willson.jpeg";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  type buttonProps = {
    text: string;
    primary: boolean;
    onClick: () => void;
  };
  const Button = (props: buttonProps) => {
    const primary = "bg-warning-700 text-white";
    const secondary = "border-warning-700 border-2 text-warning-700 ";
    const common = "py-4 px-24 rounded-lg ";

    const style = common + (props.primary ? primary : secondary);

    return (
      <button className={style} onClick={props.onClick}>
        {props.text}
      </button>
    );
  };

  const LogoutModal = () => {
    return (
      <div
        className="items-start flex fixed inset-0 outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <div className="relative w-auto my-6 ml-auto mr-4 mt-16 max-w-3xl">
          <div className="py-5 px-10 space-y-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <h3 className="self-center text-2xl font-semibold">Logout?</h3>
            <Button text={"Logout"} onClick={() => {}} primary={true} />
            <Button text={"Cancel"} onClick={() => {}} primary={false} />
          </div>
        </div>
      </div>
    );
  };

  const Profile = () => {
    return (
      <div
        className="h-14 px-4 mr-2 rounded-md flex justify-center cursor-pointer hover:shadow-lg hover:bg-gray-100 self-center"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        <div className="pr-4 felx self-center text-lg">Juliana Willson</div>
        <img
          className="w-12 h-12 rounded-full object-cover flex self-center"
          alt=""
          src={person}
        />
      </div>
    );
  };

  return (
    <>
      <div className="bg-white h-16 flex justify-between z-10 relative border-b border-gray-300">
        <div className="text-4xl font-bold text-primary-700 tracking-tight pl-2 self-center">
          Etcetera Finances
        </div>
        <Profile />
      </div>
      {showModal ? <LogoutModal /> : null}
    </>
  );
};
