import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import FicheLogement from './pages/Fiche-Logement';
// import APropos from './pages/a-propos';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fiche-logement" element={<FicheLogement/>} />
        <Route path="/a-propos" element={<APropos/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);