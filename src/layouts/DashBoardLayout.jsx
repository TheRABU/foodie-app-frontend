import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const DashBoardLayout = () => {
  return (
    <>
      <NavBar />
      <div className="w-full max-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
