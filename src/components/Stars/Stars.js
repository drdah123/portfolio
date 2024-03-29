import React, { useEffect } from 'react';
import './Stars.css';

const Stars = ({ background, bottom }) => {
  useEffect(() => {
    if (!background) {
      const cursorStars = document.querySelector('.small-night');
      const cursor = (e) => {
        cursorStars.style.top = e.pageY + 'px';
        cursorStars.style.left = e.pageX + 'px';
      };
      window.addEventListener('mousemove', cursor);
      return () => window.removeEventListener('mousemove', cursor);
    }
  }, []);

  return (
    <>
      {!background ? (
        <div className="small-night">
          <div className="small-star"></div>
          <div className="small-star"></div>
          <div className="small-star"></div>
          <div className="small-star"></div>
          <div className="small-star"></div>
        </div>
      ) : (
        <div className={`stars ${bottom ? 'stars-bottom' : ''}`}>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      )}
    </>
  );
};

export default Stars;
