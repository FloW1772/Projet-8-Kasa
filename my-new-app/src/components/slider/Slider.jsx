import React, { useState } from 'react';
import './slider.scss';


const Slider = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Manage the current image index

  const handleNextSlide = () => {
    if (currentImageIndex < pictures.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0); // Reset to the first image if reaching the end
    }
  };

  const handlePreviousSlide = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(pictures.length - 1); // Jump to the last image if at the beginning
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-images">
        {pictures.map((picture, index) => {
          const isCurrentImage = index === currentImageIndex; // Check if the image is currently displayed
          return (
            <div key={index} className={`slider-image ${isCurrentImage ? 'active' : 'hidden'}`} style={{ visibility: isCurrentImage ? 'visible' : 'hidden' }}>
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
