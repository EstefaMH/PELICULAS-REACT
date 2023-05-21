import React from 'react';

const BannerHome = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
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
          </div>
    );
}

export default BannerHome;
