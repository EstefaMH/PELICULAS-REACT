import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetReviewById from "../../Services/GetReviewById";
import GetActors from "../../Services/GetActors";
import './MovieReview.css';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";

const MovieReview = () => {
  let { id } = useParams();
  console.log(id);

  const [review, setReview] = useState();
  const [actors, setActors] = useState();

  useEffect(() => {
    GetReviewById(id)
      .then(function (response) {
        console.log(response.data);
        setReview(response.data);
        localStorage.setItem('linkimg', response.data.backdrop_path);
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

  }, []);

  let getUrl = localStorage.getItem('linkimg');

  const backgroundStyle = {
    backgroundImage: `url("https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${getUrl}")`
  }

  return (
    review && (
      <div className="card text-bg-dark mb-3 bg-opacity-50 background-movie-review" id="card_detalle" style={backgroundStyle}>
        <div className="row g-0 filter-movie-review">
          <div className="col-md-4 container-img-review">
            <img
              src={`https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${review.poster_path}`}
              className="img-fluid rounded-start img-carReview"
              alt="imagen"
              id="imagen_detalle"
            />
          </div>
          <div className="col">
            <div className="card-body mb-3">
              <h2 className="card-title text-danger">{review.title}</h2>
              <p className="card-text">
                <small>
                  <strong>Fecha estreno: </strong>{review.release_date} &emsp;
                  <strong> Duración: </strong>{review.runtime} minutos
                  <br />
                  <strong> Géneros: </strong>
                  <ul>
                    {review.genres.map((genre, i) => (
                      <li key={i}>{genre.name}</li>
                    ))}
                  </ul>
                </small>
              </p>
              <h4 className="card-title">Resumen</h4>
              <p className="card-text">{review.overview}</p>
            </div>
          </div>
          <div className="card-footer bg-transparent border-light">
            <h3 className="card-title text-center text-danger">Actores</h3>
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {actors && actors.cast.map((actor, i) => (
                <div key={i} className="col">
                  <div className="card-detail-actor">
                    <img className="card-img-top" alt="" src={actor.profile_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}` : `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ifI2QhpUlAwiWNwdDsFMRlPovsk.jpg`} />
                    <div className="card-body">
                      <h5 className="card-title">{actor.name}</h5>
                      <h5 className="card-title">{actor.character}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieReview;
