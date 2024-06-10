// Sidebar.js
import React, { useState } from "react";
import "./Home.css";

const Sidebar = () => {
  const data = [
    {
      name: "Dashboard",
      icon: "speed",
    },
    {
      name: "Implementing agency details",
      icon: "badge",
      subNavs: [
        "Municipal Corporation",
        "Municipality",
        "Town Panchayat",
        "Water Board",
      ],
    },
    {
      name: "Post Sanction",
      icon: "inventory",
      subNavs: ["Pre Sanction", "Project Sanction", "Projects"],
    },
    {
      name: "Administration Sanction",
      icon: "upload_file",
      subNavs: ["File Upload", "File List"],
    },
    {
      name: "Financial Progress",
      icon: "finance",
      subNavs: ["Financial Progress", "Financial Progress List"],
    },
    {
      name: "Physical Progress",
      icon: "sprint",
      subNavs: ["Physical Progress Updation"],
    },
    {
      name: "Master",
      icon: "folder_managed",
      subNavs: ["Vendor Master"],
    },
    {
      name: "User Profile",
      icon: "person",
      subNavs: ["User Profile", "Logout"],
    },
  ];
  const [selectedNavItem, setSelectedNavItem] = useState(0); // Set to 0 initially

  const handleNavItemClick = (index) => {
    setSelectedNavItem(selectedNavItem === index ? null : index);
  };

  return (
    <div className="sidebar">
      {data.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${selectedNavItem === index ? "active-bx" : ""}`}
        >
          {selectedNavItem === index && <div className="active-box">. </div>}
        
          <div
            className="nav-item-header"
            onClick={() => handleNavItemClick(index)}
          >
            <div className="alignMenu">
              <span className={`material-symbols-rounded ${selectedNavItem === index ? "active" : ""}`}>
                {item.icon}
              </span>
              <span className={`nav-text ${selectedNavItem === index ? "active" : ""}`}>
                {item.name}
              </span>
            </div>
            {item.subNavs && (
              <span className={`material-symbols-rounded toggle-button ${selectedNavItem === index ? "active" : ""}`}>
                {selectedNavItem === index ? "expand_less" : "expand_more"}
              </span>
            )}
          </div>
          {selectedNavItem === index && item.subNavs && (
            <div className="subnav-container">
              {item.subNavs.map((subNavItem, subIndex) => (
                <div key={subIndex} className="subnav-item">
                  {subNavItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
