import React from "react";
import './slider.scss';
import Slider from "react-slick";

const SliderCollapse = ({ pictures }) => {
  const imageUrls = pictures.map((picture) => picture.url);

  return (
    <div className="cover">
      {pictures && (
        <Slider
          pictures={imageUrls}
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
