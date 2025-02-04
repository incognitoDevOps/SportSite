import React from 'react';

interface StarRatingProps {
  value: number; // Rating value
  totalStars?: number; // Total number of stars (default is 5)
}

const StarRating: React.FC<StarRatingProps> = ({ value, totalStars = 5 }) => {
  const roundedValue = Math.round(value * 2) / 2; // Round the value to nearest half star
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < roundedValue) {
      stars.push(<span key={i} className='text-[#f36e4e]'>&#9733;</span>); // Filled star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  return <div>{stars}</div>;
};

export default StarRating;
