import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />        
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
