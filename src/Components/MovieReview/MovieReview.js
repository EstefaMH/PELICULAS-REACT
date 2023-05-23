import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetReviewById from "../../Services/GetReviewById";
import GetActors from "../../Services/GetActors";
import './MovieReview.css';

const MovieReview = ({ setBackgroundUrl }) => {
  
  let { id } = useParams();
  console.log(id);

  const [review, setReview] = useState();
  const [actors, setActors] = useState();
  const [backgroundUrl, setBackgroundUrl] = useState('');

  
  
  useEffect(() => {
    if (backgroundUrl) {
      document.body.style.backgroundImage = `url(${backgroundUrl})`;
    }
  
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [backgroundUrl]);
  

  GetReviewById(id)
  .then(function (response) {
    setReview(response.data);
    setBackgroundUrl(`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${response.data.backdrop_path}`);
  })
  .catch(function (error) {
    console.error(error);
  });

GetActors(id)
  .then(function (response) {
    setActors(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  /*<section
        className="card text-bg-dark mb-3 bg-opacity-50"
        id="card_detalle"
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${review.backdrop_path}`}
              className="img-fluid rounded-start"
              alt="imagen"
              id="imagen_detalle"
            />
          </div>
          <div className="col">
            <div className="card-body mb-3">
              <h2 className="card-title text-info">{review.title}</h2>
              <p className="card-text">
                <small>
                  <strong>Fecha estreno: </strong>
                  {review.release_date} &emsp;
                  <strong>Popularidad: </strong>
                  {review.popularity}
                  <br />
                  <strong> Géneros: </strong>
                  <ul>
                    {review.genres.map((genre, i) => (
                      <li>{genre.name}</li>
                    ))}
                  </ul>
                </small>
              </p>

              <h4 className="card-title">Duracion</h4>
              <p className="card-text">{review.runtime} minutos</p>
              <h4 className="card-title">Resumen</h4>
              <p className="card-text">{review.overview}</p>
            </div>
          </div>
        </div>
      </section>*/
  console.log(review);  
  
  return (
    review && (
      <div class="card text-bg-dark mb-3 bg-opacity-50" id="card_detalle">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${review.backdrop_path}`}
              class="img-fluid rounded-start"
              alt="imagen"
              id="imagen_detalle"
            />
          </div>
          <div class="col">
            <div class="card-body mb-3">
              <h2 class="card-title text-info">{review.title}</h2>
              <p class="card-text">
                <small>
                  <strong>Fecha estreno: </strong>{review.release_date} &emsp;
                  <strong> Duración: </strong>{review.runtime} minutos
                  <br />
                  <strong> Géneros: </strong> <ul>
                    {review.genres.map((genre, i) => (
                      <li>{genre.name}</li>
                    ))}
                  </ul>
                </small>
              </p>
              <h4 class="card-title">Resumen</h4>
              <p class="card-text">{review.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieReview;
