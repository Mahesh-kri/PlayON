import React from "react";
const TurfCard = () => {
    return (
      <div className="turf-card1">
        <img
          src="https://www.example.com/turf.jpg"
          alt="Turf Image"
          className="turf-image1"
        />
        <div className="turf-info1">
          <h2>Turf Name</h2>
          <p>Time Slot: 10:00 AM - 12:00 PM</p>
          <button className="book-button">Book Now</button>
          <div className="rating1">
            <span className="stars1">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="rating-value1">5.0</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TurfCard;