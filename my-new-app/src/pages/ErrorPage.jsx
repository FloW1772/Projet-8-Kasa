import React from "react";
import "./errorPage.scss";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


const PageNotFound = () => {

  const [error, setError] = React.useState("Oups! La page que vous demandez n'existe pas.");

  return (
    <>
      <Header />
      <div className="container">

        <h1 className="title">404</h1>
        <p className="text">{error}</p>
        <a className="link" href="/">
          Retourner à la page d'accueil
        </a>

      </div>
      <Footer />

    </>


  );
};

export default PageNotFound;
