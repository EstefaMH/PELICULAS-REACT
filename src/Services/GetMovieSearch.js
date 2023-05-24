import axios from 'axios';

const GetMovieSearch = async (search) => {
    return 	await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=64edd47a5cafe08e6d7d3db82221a5c3&query=${search}&include_adult=false&language=en-US&page=1`);
}

export default GetMovieSearch;
