import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GetMovieSearch from '../../Services/GetMovieSearch';
import '../../css/styleCardMovies.css'

const CardsSearch = () => {
    
    const [moviesSearch, setMoviesSearch] = useState();

    let search = JSON.stringify(localStorage.getItem('arrayMovies'));
    console.log(search);

    useEffect(() => {
        GetMovieSearch(search)
        .then(function (response) {
          console.log(response.data);    
          setMoviesSearch(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, []);
    

    return (
        <div className='d-flex flex-wrap justify-content-around p-3'>
             {moviesSearch && moviesSearch.map((movie, i) => (
          <form
            key={i}
            className="cardMovieSearch col-sm-12 col-md-3 mt-3 "
            method="GET"
          >
            <div className="serv_pg1i bg_dark p-4 pt-3 cards">
              <h1 className="col_light">
                <i class="fa fa-film"></i>{" "}
                <span className="pull-right">{i < 10 ? "0" + i : i}</span>
              </h1>
              <Link to={`/about/${movie.id}`}>
                <img
                  class="w-100"
                  alt="movie"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                />
              </Link>

              <Link to={`/about/${movie.id}`} className="col_red mt-2 fs-3 cardTitle" >
                {movie.original_title}
              </Link>
              <h6 className="mb-0 mt-4"></h6>
              <input
                className="w-80 bg_dark mt-2 text-white inputCardsMovie"
                id="Id"
                name="Id"
                value={movie.id}
              />
            </div>
          </form>
        ))}
        </div>
    );
}

export default CardsSearch;
