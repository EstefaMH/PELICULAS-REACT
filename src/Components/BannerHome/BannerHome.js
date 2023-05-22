import { Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";
import { useEffect, useState } from "react";
import GetUpcomming from "../../Services/GetUpcoming";
import { Link } from "react-router-dom";

const BannerHome = () => {
  const [banner, setBanner] = useState();

  useEffect(() => {
    GetUpcomming()
      .then(function (response) {
        console.log(response.data);
        setBanner(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    /* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" style="margin-top: 10px;" >
                <img src="assets\avatar2Slide2.png" class="d-block w-100" alt="Imagen avatar"/>
              </div>
              <div class="carousel-item"  style="margin-top: 10px;">
                <img src="assets\creed3Slide3.jpeg" class="d-block w-100" alt="Imagen Creed III"/>
              </div>
              <div class="carousel-item"  style="margin-top: 10px;">
                <img src="assets\thewhale3Slide3.jpg" class="d-block w-100" alt="Imagen The whale"/>
              </div>
              
              <div class="carousel-item"  style="margin-top: 10px;">
                <img src="assets\jhonWick4Slide4.jpg" class="d-block w-100" alt="Imagen Jhon Wick 4"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>*/
    <Container maxWidth="xl">
      <ImageList variant="masonry" cols={5} gap={8}>
        {banner &&
          banner.map((movie, id) => (
            <ImageListItem key={id}>
              <Link to={`/about/${movie.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
              </Link>
            </ImageListItem>
          ))}
      </ImageList>
    </Container>
  );
};

export default BannerHome;
