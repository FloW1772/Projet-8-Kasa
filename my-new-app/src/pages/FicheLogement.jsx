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
            <div className="cover">
              {logement.pictures && <Slider pictures={logement.pictures} />}
               <section className="contact">
           <p>{logement.host.name}</p>
           <img src={logement.host.picture} alt="" />
          </section>
            </div>

            <div className="infos">
              <h2>{logement.title}</h2>

              <section className="localisation">
                <p>{logement.location}</p>
              </section>
            <div className="tags-and-rating">
              <section className="tags">
                {logement?.tags?.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </section>

              <div className="rating">
                <Rating ratings={logement.rating} />
              </div>
            </div>
            </div>
          </section>
          

          <div class="collapse-container">
            <Collapse title="Description" description={logement.description} />
            <Collapse title="Équipements" description={logement.equipments?.join(', ')} />
          </div>


         

          <Footer />
        </div>
      )}
    </div>
  );
}
