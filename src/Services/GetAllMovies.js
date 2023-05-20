import axios from "axios";

async function GetAllMovies() {
  return await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=64edd47a5cafe08e6d7d3db82221a5c3&language=es-ES&page=1&region=CO"
  
    )
    
}

export default GetAllMovies;
