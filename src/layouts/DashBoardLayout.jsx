import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import LeftDashboardBar from "../components/LeftSideBar/LeftDashboardBar";

const DashBoardLayout = () => {
  return (
    <>
      <NavBar />
      <div className="flex-row md:flex justify-between h-full">
        <LeftDashboardBar />
        <div className="w-full h-full bg-[#ffffff]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
