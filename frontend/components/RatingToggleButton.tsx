import React, { useState } from 'react';

interface RatingToggleButtonProps {
  color: 'white' | '#f36e4e'; 
}

const RatingToggleButton: React.FC<RatingToggleButtonProps> = ({ color }) => {
  const [iswhite, setIswhite] = useState(color === '#f36e4e');

  const handleToggleColor = () => {
    setIswhite((prevIswhite) => !prevIswhite);
  };

  return (
    <div>
      <button onClick={handleToggleColor}>
        <span style={{ color: iswhite ? '#f36e4e' : 'white' }}>&#9733;</span>
      </button>
    </div>
  );
};

export default RatingToggleButton;
