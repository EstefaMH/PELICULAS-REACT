import Footer from "../Components/Footer/Footer";
import GetAllMovies from "../Services/GetAllMovies";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import GetPopularMovies from "../Services/GetPopularMovies";
import BannerHome from "../Components/BannerHome/BannerHome";
import Header from "../Components/Header/Header";

function Home() {

  return (
    <div>
      <Header />
      <Navbar />
      <BannerHome />
      <Footer />
    </div>
  );
}

export default Home;
