import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/Navbar/NavBar.jsx";
const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
