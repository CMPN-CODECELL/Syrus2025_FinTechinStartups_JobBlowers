import React from "react";
import { FaUserCircle, FaBell, FaGlobe } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-icons">
        <FaBell className="icon" />
        <FaGlobe className="icon" />
      </div>
      <h1 className="header-title">Hello, Aadi 👋</h1>
      <div className="user-icon">
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;
