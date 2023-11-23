import { useState } from "react";
import './slider.scss';
import left from '../../assets/icones/left.png'
import right from '../../assets/icones/right.png'

const Slider = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  console.log(pictures)

  const goToNextSlide = () => {
    setCurrentSlide((nextSlide) => nextSlide === pictures.length - 1 ? 0 : nextSlide + 1)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? pictures.length - 1 : prevSlide - 1)

  }


  return (
    <div className="slider-container">
      <img src={pictures[currentSlide]} alt="" />
      <div class="slider-btn-prev" onClick={goToPrevSlide}>
        <img src="left" />
      </div>


      <div className="slider-btn-next" onClick={goToNextSlide}>
        <img src="right"/>
      </div>


      <div>
        {currentSlide + 1}/{pictures.length}
      </div>

    </div>
  );
};


export default Slider;
