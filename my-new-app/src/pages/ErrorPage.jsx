import React from "react";
import "./errorPage.scss";

const PageNotFound = () => {
  const [error, setError] = React.useState("La page que vous demandez n'existe pas.");

  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p className="text">{error}</p>
      <a className="link" href="/">
        Retourner à la page d'accueil
      </a>
    </div>
  );
};

export default PageNotFound;
