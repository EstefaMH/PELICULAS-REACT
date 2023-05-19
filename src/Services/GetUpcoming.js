import axios from "axios";

function GetUpcomming() {
 
    const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "es-ES", page: "1" },
    headers: { accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

export default GetUpcomming;
