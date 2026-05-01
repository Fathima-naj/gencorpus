import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-2 rounded bg-blue-500 text-white"
      : "block px-4 py-2 rounded text-gray-700 hover:bg-gray-200";

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">

        

        <nav className="flex flex-col gap-2">
          <NavLink to="profile" className={linkClass}>
            👤 Profile
          </NavLink>

          <NavLink to="settings" className={linkClass}>
            ⚙️ Settings
          </NavLink>
        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Dashboard Content
          </h2>

          {/* Nested Routes Render Here */}
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;