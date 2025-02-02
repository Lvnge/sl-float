import { useState } from "react";
import { FaHome, FaCog, FaUser } from "react-icons/fa"; // Example icons

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-full bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } p-4`}
    >
      <button className="text-white mb-4" onClick={toggleSidebar}>
        {isCollapsed ? "→" : "←"}
      </button>
      <div className={`mt-6 ${isCollapsed ? "hidden" : ""}`}>
        <ul>
          <li className="flex items-center mb-4">
            <FaHome className="mr-2" />
            {!isCollapsed && <span>Home</span>}
          </li>
          <li className="flex items-center mb-4">
            <FaCog className="mr-2" />
            {!isCollapsed && <span>Settings</span>}
          </li>
          <li className="flex items-center mb-4">
            <FaUser className="mr-2" />
            {!isCollapsed && <span>Profile</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
