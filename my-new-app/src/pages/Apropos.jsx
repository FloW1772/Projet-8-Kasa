import React from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Collapse from '../components/collapse/collapse';

const Colapse = ({ children }) => {
  return (
    <div>
            <Header />

      <h3 className="CollapseApropos">FIabilité</h3>
      <Collapse>

      <p>
      */
      </p>
      </Collapse>
      <h3 className="CollapseApropos">Respect</h3>
      <Collapse>

      <p>
      */
      </p>
      </Collapse>
      <h3 className="CollapseApropos">Service</h3>
      <Collapse>

      <p>
        */
      </p>
      </Collapse>
      <h3 className="CollapseApropos">Sécurité</h3>
      <Collapse>

      <p>
      */
      </p>
      </Collapse>
      <Footer />
    </div>
  );
};

export default Colapse;

