import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./footicon.svg";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavItemClick = (page) => {
    navigate(page);
  };

  const handleAccountClick = () => {
    if (
      location.pathname !== "/SignupPage" &&
      location.pathname !== "/TurfNearby" &&
      location.pathname !== "/TurfOwnerPage"
    ) {
      handleNavItemClick("/UserAccount");
    }
    if (location.pathname === "/ListTurfPage") {
      handleNavItemClick("/TurfOwnerPage");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="website-name">
          <h1 className="card-container">PlayON</h1>
        </span>
      </div>
      <div className="navbar-right">
        <button
          onClick={() => handleNavItemClick("/Landing")}
          className="nav-link"
        >
          Home
        </button>
        <button onClick={handleAccountClick} className="nav-link">
          Account
        </button>

        <div className="searchbar"></div>
        <button className="menu-btn">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
