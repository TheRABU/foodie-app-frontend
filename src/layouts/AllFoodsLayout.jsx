import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";

const AllFoodsLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AllFoodsLayout;
