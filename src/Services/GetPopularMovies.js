import axios from "axios";

function GetPopularMovies() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/person/popular?api_key=64edd47a5cafe08e6d7d3db82221a5c3",
    params: { language: "es-ES", page: "1" },
    headers: { accept: "application/json" },
  };

  return axios.request(options)
   
}
export default GetPopularMovies;