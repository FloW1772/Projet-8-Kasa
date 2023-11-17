import React, { useState } from 'react';
import './slider.scss';


const Slider = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const handleNextSlide = () => {
    if (currentImageIndex < pictures.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const handlePreviousSlide = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(pictures.length - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-images">
        {pictures.map((picture, index) => {
          const isCurrentImage = index === currentImageIndex;
          return (
            <div key={index} style={{
              position: 'absolute',
              top: '-9999px',
              left: '-9999px',
              width: '100%',
              height: '100%',
              zIndex: isCurrentImage ? 1 : 0,
            }}>
              <img src={picture} alt="" />
            </div>
          );
        })}
      </div>

      <div className="slider-navigation">
        <button className="slider-button prev" onClick={handlePreviousSlide}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <button className="slider-button next" onClick={handleNextSlide}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
