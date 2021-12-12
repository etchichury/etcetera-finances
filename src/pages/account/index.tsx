import { Outlet } from "react-router-dom";
import Sidebar from "src/components/Sidebar";

const Account = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Account;
