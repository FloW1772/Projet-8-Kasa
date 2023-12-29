import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import Slider from '../components/slider/Slider';
import Rating from '../components/rating/Rating';
import ErrorPage from '../pages/ErrorPage.jsx';
import Collapse from '../components/collapse/collapse.jsx';
import './fichelogement.scss';
import Tag from '../components/tag/Tag';

export default function FicheLogement() {
  const [logement, setLogement] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then((datas) => datas.json())
      .then((jsondata) => {
        const logementData = jsondata.find((item) => item.id === id);
        if (!logementData) {
          setError(true);
        } else {
          setLogement(logementData);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : logement && (
        <div>
          <Header />

          <section className="fiche-logement">
            {logement.pictures && <Slider pictures={logement.pictures} logementTitle={logement.title} />}

            <div className="infos-contact">
              <div className="infos">
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="tags">
                  {logement?.tags?.map((tag) => (
                    <Tag key={tag} tag={tag} />
                  ))}
                </div>
              </div>

              <div className="localisation">
                {logement.host && (
                  <div className="contact">
                    <p>{logement.host.name.split(" ")[0]}<br />{logement.host.name.split(" ")[1]}</p>
                    <img src={logement.host.picture} alt="" />
                  </div>
                )}
                <Rating ratings={logement.rating} />
              </div>
            </div>

          </section>


          <div className="collapse-container">
            <Collapse title="Description" description={logement.description} />
            <Collapse title="Équipements" description={logement.equipments?.join(', ')} />
          </div>




          <Footer />
        </div>
      )}
    </div>
  );
}
