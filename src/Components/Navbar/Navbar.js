import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import GetMovieSearch from "../../Services/GetMovieSearch";

function Navbar() {
  const [search, setSearch] = useState();

  function handleChange(e) {
    setSearch(e.target.value);
  }

  console.log(search);



  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem('arrayMovies' , search);
    window.location.href = '/search';
   
};

  return (
    <section id="header">
      <nav class="navbar navbar-expand-md navbar-light" id="navbar_sticky">
        <div class="container">
          <Link to="/" class="navbar-brand text-white fw-bold">
            <i class="fa fa-video-camera col_red me-1"></i>
            YESmovies
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/movies" className="nav-link">
                  Peliculas
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/credits" className="nav-link">
                  Creditos
                </Link>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}  className="container d-flex col-md-6 col-sm-12 mt-3">
            <input
              type="search"
              class="form-control bg-black w-60"
              id="input-search"
              autocomplete="autocomplete"
              placeholder="Buscar una pelicula"
              onChange={handleChange}
              value={search}
            />
            <button
              class="btn btn text-white bg_red rounded-0 border-0" 
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
