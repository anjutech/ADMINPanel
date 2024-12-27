import  { useState } from "react";
import { FaHome, FaPlay, FaBars,  FaMedal, FaLock } from "react-icons/fa";
import classNames from "classnames";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { label: "Manager Admin", icon: <FaHome />, link: "" },
    { label: "Services", icon: <FaPlay />, link: "#subscriptions" },
    {      label: "LogIn",
      icon: <FaLock />,
      link: "/login"
    },
    {
      label: "SignUp",
      icon: <FaPlay />,
      link: "/signup"
    }
  ];

  return (
    <div className="custom-sidebar-container ">
      {/* Sidebar */}
      <div
        className={classNames("custom-sidebar", { collapsed: isCollapsed })}
        style={{
          width: isCollapsed ? "80px" : "250px",
          backgroundColor: "#212121",
          color: "#ffffff",
          padding: "20px",
          boxShadow: "10px 10px 10px rgba(74, 199, 20, 0.2),10px 10px 10px rgba(16, 225, 30, 0.2),0px 0px 10px rgba(17, 193, 7, 0.2)",
          transition: "box-shadow 0.3s ease",
          overflow: "hidden"
        }}
      >
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
        >
                 {isCollapsed && <FaBars />}
                {!isCollapsed && <h5><FaMedal/> Manager Admin</h5>}
                </button>

        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link} className="menu-link">
                {item.icon}
                {!isCollapsed && <span className="menu-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="custom-main-content m-5 ">
        <h1>Manager Admin Dashboard</h1>
       
      </div>
    </div>
  );
};

export default Sidebar;
