import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/Navbar/NavBar.jsx";
const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="min-h-[calc(100vh-306px)] mx-auto ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
