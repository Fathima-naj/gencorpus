import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      <Outlet />
    </>
  );
}

export default Layout;