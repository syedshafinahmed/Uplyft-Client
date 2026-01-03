import React, { useState, useEffect, useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { RiCommunityFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import Switch from "../../toggle/Switch";
import { FaLock, FaUnlock } from "react-icons/fa";
import { Link } from "react-router";

const Dashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have successfully logged out.",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed!",
          text: err.message,
        });
      });
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "Profile", to: "/dashboard/profile" },
    { name: "Upcoming Events", to: "/upcoming-events" },
    { name: "Joined Events", to: "/joined-events" },
    { name: "Manage Events", to: "/manage-events" },
    { name: "Create Event", to: "/create-event" },
    { name: "Logout", action: handleLogout },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      {isSidebarOpen && (
        <aside className="w-56 bg-white dark:bg-gray-800 shadow-lg flex flex-col transition-all duration-300">
          {/* Logo */}
          <div className="p-6 flex flex-col items-start gap-1">
            <div className="flex items-center gap-1">
              <RiCommunityFill size={40} className="text-indigo-800 dark:text-violet-600" />
              <span className="text-4xl font-black text-indigo-800 dark:text-violet-600">Uplyft</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            {links.map((link) =>
              link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="w-full text-left block px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {link.name}
                </button>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition ${isActive
                      ? "border-l-3 border-indigo-800 dark:border-violet-600 text-indigo-800 dark:text-violet-600 font-black ml-3"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </nav>
        </aside>
      )}

      {/* Sidebar toggle icon */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute bottom-20 left-0 z-50 p-2 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 rounded-tr rounded-br shadow-md focus:outline-none"
      >
        {isSidebarOpen ? (
          <FaUnlock size={20} className="text-indigo-800 dark:text-violet-600" />
        ) : (
          <FaLock size={20} className="text-indigo-800 dark:text-violet-600" />
        )}
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0">
        {/* Top Navbar */}
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <Link to='/dashboard/dashboard-home' className="text-xl font-black text-indigo-800 dark:text-violet-600">Dashboard</Link>
          <div className="flex items-center gap-4">
            <Switch theme={theme} handleTheme={handleTheme} />
            <div className="w-10 h-10 rounded-full border-2 border-indigo-800 dark:border-violet-500 overflow-hidden">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;