import React from "react";
import "./stars.css"; // Import the stars CSS

const generateStars = (numStars = 150) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const left = Math.random() * 100; // Random left position
    const top = Math.random() * 100;  // Random top position
    const size = Math.random() * (3 - 1) + 1; // Random size for the stars
    const animationDuration = Math.random() * (100 - 60) + 60; // Random speed for stars

    stars.push(
      <div
        key={i}
        className="star"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${animationDuration}s`,
        }}
      />
    );
  }
  return stars;
};

const StarsBackground = () => {
  // Use the generateStars function to generate star JSX elements
  const stars = generateStars(150);

  return (
    <div className="stars-background">
      {stars}
    </div>
  );
};

export default StarsBackground;
