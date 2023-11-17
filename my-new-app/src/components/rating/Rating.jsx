import React from 'react';

export default function Rating({score}) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (score >= i + 1) {
      stars.push(<i className="fa fa-star" />);
    } else {
      stars.push(<i className="fa fa-star-o" />);
    }
  }

  return (
    <div>{stars}</div>
  )
}
