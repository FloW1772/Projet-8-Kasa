import React from 'react'
// image pour la page 1
const image1 = require("../../assets/images/Picture1.png");

// image pour la page 2
const image2 = require("../../assets/images/Picture2.png");

// composant Graph pour la page 1
const Graph1 = ({ image }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <h1>Page 1</h1>
    </div>
  );
};

// composant Graph pour la page 2
const Graph2 = ({ image }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <h1>Page 2</h1>
    </div>
  );
};

// composant App
const App = () => {
  return (
    <div>
      <Graph1 image={image1} />
      <Graph2 image={image2} />
    </div>
  );
};

// export
export default App;
