import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-500";

  return (
    <nav className="sticky top-0 bg-white shadow-md px-6 py-4 flex justify-between items-center">

      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800">
        Dashboard
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">

        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;