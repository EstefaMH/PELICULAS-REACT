import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section id="header">
            <nav class="navbar navbar-expand-md navbar-light" id="navbar_sticky">
                <div class="container">
                    <Link to="/" class="navbar-brand text-white fw-bold" >
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
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link" aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/movies" class="nav-link">
                                    Peliculas
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/credits" class="nav-link" >
                                    Creditos
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link" >
                                    Contactenos
                                </Link>
                            </li>
                        
                        </ul>
                    </div>
                    <form
                        class="container d-flex col-md-6 col-sm-12 mt-3 "
                        action="searchMovie.html"
                    >
                        <input
                            type="search"
                            class="form-control bg-black w-60"
                            id="input-search"
                            autocomplete="autocomplete"
                            placeholder="Buscar una pelicula"
                        />
                        <button
                            class="btn btn text-white bg_red rounded-0 border-0"
                            type="submit"
                            onclick="getMovieSearch(inputSearch())"
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
