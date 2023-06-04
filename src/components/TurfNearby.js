import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const TurfNearby = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    navigate(`/${page}`);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userType = document.getElementById("user-type").value;
    if (userType === "turf-owner") {
      handleNavItemClick("TurfOwnerPage");
    } else if (userType === "player") {
      handleNavItemClick("Playerpage");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 id="logtext">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="user-type">User Type</label>
          <select id="user-type" name="user-type">
            <option value="turf-owner">Turf Owner</option>
            <option value="player">Player</option>
          </select>

          <span
            onClick={() => handleNavItemClick("SignupPage")}
            className="signup-link"
          >
            Don't have an account? Sign up here
          </span>

          <button type="submit" className="nav-link">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default TurfNearby;
