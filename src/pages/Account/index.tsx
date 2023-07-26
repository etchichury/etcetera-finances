import { Outlet } from "react-router-dom"
import Sidebar from "components/Sidebar"

const Account = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Account
