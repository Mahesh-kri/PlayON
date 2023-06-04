import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const UserAccount = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    navigate(page);
  };

  return (
    <div className="user-account-page">
      <h2>User Account</h2>
      <div className="user-card">
        <h3>Name: Mahesh </h3>
        <h3>Email: mah@example.com</h3>
        <h3>Role: Player</h3>
      </div>
      <div className="dashboard-card">
        <h3>Dashboard</h3>
        <p>
          Welcome to your dashboard! Here, you can manage your account, view
          upcoming bookings
        </p>
        {/* Add dashboard functionality */}
      </div>
      <div className="booking-history-card">
        <h3>Booking History</h3>
        <ul>
          <li>Booking 1</li>
          <li>Booking 2</li>
          <li>Booking 3</li>
          {/* booking history */}
        </ul>
      </div>
      <div className="preferences-card">
        <h3>Preferences</h3>
        <p>Customize your account preferences and settings here.</p>
        {/* Add preferences */}
      </div>
      <div className="logout">
        <button
          onClick={() => handleNavItemClick("/Landing")}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserAccount;
