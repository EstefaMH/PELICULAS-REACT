import axios from "axios";

function GetReviewById(){


const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/movie_id/reviews",
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

export default GetReviewById;