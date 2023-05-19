import React, { useState, useEffect } from 'react';

const AnimatedTitles = ({ titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="animated-titles">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`title ${index === currentIndex ? 'slide-in' : ''}`}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
