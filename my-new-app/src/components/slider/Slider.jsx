import React from "react";
import './slider.scss';
import Slider from "react-slick";

const SliderCollapse = ({ pictures }) => {
  return (
    <div className="cover">
      {pictures && (
        <Slider
          pictures={pictures}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          dots={false}
          autoplay={false}
        />
      )}
    </div>
  );
};

export default SliderCollapse;
