import React, { useState } from 'react';
import './slider.scss';

const Slider = ({ pictures }) => {
  const [currentImage, setCurrentImage] = useState(pictures[0]); // Manage the currently displayed image

  const handleNextSlide = () => {
    if (pictures.length > 1) {
      const nextImageIndex = (pictures.indexOf(currentImage) + 1) % pictures.length;
      setCurrentImage(pictures[nextImageIndex]);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-images">
        {pictures.map((picture, index) => {
          const isCurrentImage = picture === currentImage; // Check if the image is currently displayed
          return (
            <div key={index} className={`slider-image ${isCurrentImage ? 'active' : 'hidden'}`} style={{ visibility: isCurrentImage ? 'visible' : 'hidden' }}>
              <img src={picture} alt="" />
            </div>
          );
        })}
      </div>

      {/* Navigation button */}
      <button className="slider-button next" onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;
