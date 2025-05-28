import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="container max-w-6xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
