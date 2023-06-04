import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    navigate(`/${page}`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userType = document.getElementById("user-type").value;
    if (userType === "turf-owner") {
      handleNavItemClick("TurfNearby");
    } else if (userType === "player") {
      handleNavItemClick("TurfNearby");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 id="logtext">Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="full-name">Full Name</label>
          <input type="text" id="full-name" name="full-name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />

          <label htmlFor="user-type">User Type</label>
          <select id="user-type" name="user-type">
            <option value="turf-owner">Turf Owner</option>
            <option value="player">Player</option>
          </select>

          <button type="submit" className="nav-link">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
