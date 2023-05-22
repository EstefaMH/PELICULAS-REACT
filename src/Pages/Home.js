import Footer from "../Components/Footer/Footer";
import GetAllMovies from "../Services/GetAllMovies";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import GetPopularMovies from "../Services/GetPopularMovies";

function Home() {
  const [movies, setMovies] = useState();

  useEffect(function () {
    GetAllMovies()
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });

      GetPopularMovies();
  }, []);

    console.log(movies);
  

  return (
    <div>
      <Navbar/>
      <Footer />

    </div>
  );
}

export default Home;
