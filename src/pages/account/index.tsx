import { Outlet } from "react-router-dom";
import Sidebar from "src/components/sidebar";

const Account = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Account;
