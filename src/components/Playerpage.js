import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Searchbar';
import StarRating from '../StarRating';
import TurfCard from '../Turfcard';

const PlayerPage = () => {
  const [turfs, setTurfs] = useState([
    {
      id: 1,
      name: 'Turf 1',
      image: 'https://example.com/turf1.png',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Turf 2',
      image: 'https://example.com/turf2.png',
      rating: 3.5,
    },
    {
      id: 3,
      name: 'Turf 3',
      image: 'https://example.com/turf3.png',
      rating: 5.0,
    },
  ]);
  const navigate = useNavigate();

  const handleNavItemClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="card-container-parent">
      {SearchBar}
      <div className="card-container1">
        {turfs.map((turf) => (
          <div className="card-t" key={turf.id}>
            <div className="card-image-t">
              <img className="turf-img" src={turf.image} alt={turf.name} />
            </div>
            <div className="card-content-t">
              <div className="left-container">
                <h2>{turf.name}</h2>
                <div className="card-rating-t">
                  {turf.rating.toFixed(1)}
                  <span className="stars">
                    <StarRating />
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fa fa-star${turf.rating >= star ? ' checked' : ''}`}
                      ></i>
                    ))}
                  </span>
                </div>
              </div>
              <div className="right-container">
                <button
                  onClick={() => handleNavItemClick('BookTurf')}
                  className="book-btn-t"
                >
                  Book
                </button>
                <button className="time-slot-btn-t">Book Time Sylot</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerPage;