import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ListTurfPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Redirect to turf-owner-page after form submission
    navigate("/TurfOwnerPage");
  };

  return (
    <div className="turf-owner-page">
      <h2 id="logtext">List Your Turf</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="turf-name">Turf Name</label>
            <input type="text" id="turf-name" name="turf-name" />
          </div>

          <div className="form-group">
            <label htmlFor="turf-about">About</label>
            <textarea id="turf-about" name="turf-about" rows="3"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="turf-location">Location</label>
            <input type="text" id="turf-location" name="turf-location" />
          </div>

          <div className="form-group">
            <label htmlFor="turf-timings">Timings</label>
            <select id="turf-timings" name="turf-timings">
              <option value="1-2">1-2</option>
              <option value="2-3">2-3</option>
              <option value="3-4">3-4</option>
              <option value="4-5">4-5</option>
              <option value="5-6">5-6</option>
              <option value="6-7">6-7</option>
              <option value="7-8">7-8</option>
              <option value="8-9">8-9</option>
              {/* Add more options for timings */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="turf-rate">Rate per Hour</label>
            <input type="text" id="turf-rate" name="turf-rate" />
          </div>

          <div className="form-group">
            <label htmlFor="turf-payment">Payment Information (UPI ID)</label>
            <input type="text" id="turf-payment" name="turf-payment" />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListTurfPage;
