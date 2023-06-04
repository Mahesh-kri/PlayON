import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleExploreButtonClick = () => {
    navigate("/TurfNearby");
  };

  return (
    <div className="landing-page">
      <h1 id="maintext">
        Book your perfect turf today and experience the game like never before.
        Our user-friendly platform lets you choose from a variety of turfs with
        state-of-the-art facilities. Let's get you playing!<br></br>
        <br></br>Get ready to play - book your turf today!
      </h1>

      <button onClick={handleExploreButtonClick} className="explore-btn">
        Explore Turfs Nearby
      </button>
    </div>
  );
};

export default Landing;
