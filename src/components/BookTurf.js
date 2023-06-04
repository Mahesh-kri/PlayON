import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const BookTurf = () => {
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div>
      <div className="turf-pic-big">
        <img
          src="https://playo.gumlet.io/KALIKKALAMTURF20220331072751670838/KalikkalamTurf1648712352202.jpg?w=700&format=webp&q=30&overlay=https://playo-website.gumlet.io/playo-website-v2/logos-icons/playo-logo.png&overlay_width_pct=0.2&overlay_height_pct=1&overlay_position=bottomright"
          alt=""
          className="wide-img"
        />
      </div>
      <div className="descrip">
        <h2 id="address">Address :</h2>
        <h2 id="desc">
          Morarji Desai Rd, Vazhakkulam, Kakkanad, Kochi, Kerala
        </h2>
        <h2 id="hours">Hours: Open 24 hours</h2>
        <h2 id="phone">Phone No: 9447402989</h2>
      </div>
      <div className="payment-right-section">
        {/* Include your PaymentForm component or logic here */}
        <button
          onClick={() => handleNavItemClick("UserAccount")}
          className="list-btn"
        >
          Go to User Account
        </button>
      </div>
    </div>
  );
};

export default BookTurf;
