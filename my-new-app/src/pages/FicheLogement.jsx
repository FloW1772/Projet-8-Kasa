import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import Slider from '../components/slider/Slider';
import Rating from '../components/rating/Rating';
import ErrorPage from '../pages/ErrorPage.jsx'
import Collapse from '../components/collapse/collapse.jsx';
import Tags from '../components/tags/Tags.jsx';

export default function FicheLogement() {
  const [logement, setLogement] = useState([]);
  let { id } = useParams()
  const [error, setError] = useState(false)
  // const { title, pictures, description, host, rating, location, equipments, tags } = logement ?? {};
  useEffect(() => {
    fetch("/data.json")
      .then((datas) => {
        return datas.json();
      })
      .then((jsondata) => {
        const logementData = jsondata.find((item) => item.id === id)
        setLogement(logementData);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {error ? <ErrorPage /> : logement && (
        <div>
          <Header />


          <section className="fiche-logement">
            <div className="cover">
              {logement.pictures && (
                <Slider pictures={logement.pictures} />
              )}
            </div>
            <div className="infos">
              <h2>{logement.title}</h2>
              <div className="rating">
                <Rating ratings={logement.rating} />
              </div>
              <p>{logement.description}</p>
            </div>
          </section>

          <section className="tags">
            <h2>Tags</h2>
            <Tags tags={logement.tags} />
          </section>




          <section className="equipements">
            <h2>Équipements</h2>
            <Collapse


            // <ul>
            //   {(logement.equipments ?? []).map((equipment) => (
            //     <li key={equipment}>{equipment}</li>
            //   ))}
            // </ul>
            />
          </section>

          <section className="localisation">
            <h2>Localisation</h2>
            <p>{logement.location}</p>
          </section>

          <section className="contact">
            <h2>Contact</h2>
            <p>
              <a href="#">Contacter l'hôte</a>
            </p>
          </section>

          <Footer />

        </div>
      )}
    </div>

  )
}
