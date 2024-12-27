import { useState } from "react";
import { FaBars, FaMedal } from "react-icons/fa";
import classNames from "classnames";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsDatabaseCheck } from "react-icons/bs";
import { IoMdLogIn,IoMdLogOut} from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import ManageCustomerTable  from "../Components/ManageCustomerTable";
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const menuItems = [
    { label: "Manage Customer", icon: <RiCustomerService2Fill />, link: "#home" },
    { label: "Manage Data", icon: <BsDatabaseCheck />, link: "#subscriptions" },
    { label: "Check Reports", icon: <TbReportSearch />, link: "#CheckReport" },
    { label: "Settings", icon: <IoMdLogIn />, link: "#Settings" },
    { label: "Logout", icon: <IoMdLogOut />, link:"/logout"}
  ];

  
  return (
    <div className="custom-sidebar-container ">
      {/* Sidebar */}
      <div
        className={classNames("custom-sidebar", { collapsed: isCollapsed })}
        style={{
          width: isCollapsed ? "80px" : "300px",
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
          {!isCollapsed && <h5><FaMedal /> Super Admin</h5>}
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
      <ManageCustomerTable/>

    </div>
  );
};

export default Sidebar;
