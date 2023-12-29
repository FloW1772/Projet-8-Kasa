import React from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Collapse from '../components/collapse/collapse';
import Banner from '../components/banner/Banner';
import bannerhome from '../assets/images/Picture2.png'
import "./apropos.scss";


const About = ({ children }) => {
  return (
    <div>
      <Header />
      <Banner image={bannerhome} />
      <div className="apropos-container-collapses">
        <Collapse
          title='Fiabilité '
          description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        />
        <Collapse
          title='Respect'
          description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Collapse
          title='Service'
          description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <Collapse
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.

En laissant une note à l'hôte et au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />

      </div>
      <Footer />
    </div>
  );
};

export default About;

