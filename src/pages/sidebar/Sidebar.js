import React from "react";
import "../../styles/sidebar/sidebar.css";
import SidebarProfile from "./SidebarProfile";
import SidebarLog from "./SidebarLog";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <SidebarProfile />
      <SidebarLog />
    </div>
  );
};

export default Sidebar;
