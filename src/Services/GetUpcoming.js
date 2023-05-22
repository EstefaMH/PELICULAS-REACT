import axios from "axios";

function GetUpcomming() {
 
    const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming?api_key=64edd47a5cafe08e6d7d3db82221a5c3",
    params: { language: "es-ES", page: "1" },
    headers: { accept: "application/json" },
  };

  return axios.request(options)
   /* .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });*/
}

export default GetUpcomming;
