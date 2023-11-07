// home.js
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Card from '../components/card/Card';
import './home.scss';
import Banner from '../components/banner/Banner';
import bannerhome from '../assets/images/Picture1.png'

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
      <Banner image={bannerhome} title='Chez vous, partout et ailleurs' />
      <div className="logement-cards">
        {logements?.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

