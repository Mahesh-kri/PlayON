import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const TurfOwnerPage = () => {
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
        <h3>Role: Turf-Owner</h3>
      </div>
      <div className="dashboard-card">
        <h3>Dashboard</h3>
        <p>
          Welcome to your dashboard! Here, you can manage your account, view
          upcoming bookings
        </p>
        <button
          onClick={() => handleNavItemClick("/ListTurfPage")}
          className="list-btn"
        >
          List a Turf
        </button>
      </div>
      <div className="booking-history-card">
        <h3>Listing History</h3>
        <ul>
          <li>Listing 1</li>
          <li>Listing 2</li>
          <li>Listing 3</li>
          {/* booking history */}
        </ul>
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

export default TurfOwnerPage;
