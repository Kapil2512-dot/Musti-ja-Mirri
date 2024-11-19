import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';

const Rating = ({ id }) => {
  // Create a unique storage key using the provided id
  const storageKey = `userRating_${id}`;

  // Initialize rating from local storage or set to 0 if not found
  const [rating, setRating] = useState(() => {
    return Number(localStorage.getItem(storageKey)) || 0;
  });

  const ratingChanged = (newRating) => {
    setRating(newRating);
    localStorage.setItem(storageKey, newRating); // Save to local storage
    console.log(`Rating for image ${id} changed to: ${newRating}`);
  };

  useEffect(() => {
    // Retrieve the stored rating on component mount
    const storedRating = Number(localStorage.getItem(storageKey));
    if (storedRating) {
      setRating(storedRating);
    }
  }, [storageKey]);

  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Rating;
