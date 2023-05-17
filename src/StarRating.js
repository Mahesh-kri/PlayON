import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= rating ? "selected" : ""}`}
            onClick={() => handleRatingClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
      <span className="rating-value">{rating}</span>
    </div>
  );
};

export default StarRating;
