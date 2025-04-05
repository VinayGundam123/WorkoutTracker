// components/Layout.js
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  const location = useLocation();
  const hideNav = location.pathname === "/"; // Hide navbar only on login page

  return (
    <>
      {!hideNav && <NavBar />}
      <Outlet />
    </>
  );
};

export default Layout;
