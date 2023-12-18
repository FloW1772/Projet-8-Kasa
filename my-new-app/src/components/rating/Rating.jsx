import React from 'react';
import Blanche from '../../assets/icones/Vector_blanche.png'
import Rouge from '../../assets/icones/Vector.png'

export default function Rating({ ratings }) {
  const stars = [];
  let redStars = 0;

  for (let i = 0; i < 5; i++) {
    if (redStars < ratings) {
      stars.push(<img key={i} src={Rouge} alt="Red star" className="star" />);
      redStars++;
    } else {
      stars.push(<img key={i} src={Blanche} alt="White star" className="star" />);
    }
  }

  return <div className="rating">{stars}</div>;
}
