import React from 'react';
import './banner.scss'

const Banner = ({ image, title }) => {
  return (
    <div className='banner-background' >
      <img className='banner-img' src={image} alt="" />
      {!title ? '' : <h1 className='banner-title'>{title}</h1>}
    </div>
  );
};





export default Banner;
