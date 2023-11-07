// home.js
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Card from '../components/card/Card';
import Graph1 from '../components/banner/Banner';
import './home.scss';
import { image1 } from '../components/banner/Banner';

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((datas) => {
        return datas.json();
      })
      .then((jsondata) => {
        setLogements(jsondata);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <Graph1 image={image1} />
      <div className="logement-cards">
        {logements?.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

