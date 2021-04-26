import actions from "../actions/actions";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "e98e77c903068e3cdf69e15d92c890ac";

const fetchTrendingMovies = (page = 1) => (dispatch) => {
  dispatch(actions.fetchTrendingMoviesRequest());
  dispatch(actions.clearQueryArray([]));

  axios
    .get(`/trending/movie/day?api_key=${apiKey}&page=${page}`)
    .then(({ data }) => dispatch(actions.fetchTrendingMoviesSuccess(data)))
    .catch((error) => dispatch(actions.fetchTrendingMoviesError(error)));
};

const fetchMoviesByQuery = (query, page = 1) => (dispatch) => {
  dispatch(actions.fetchMoviesByQueryRequest());

  axios
    .get(`/search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
    .then(({ data }) => dispatch(actions.fetchMoviesByQuerySuccess(data)))
    .catch((error) => dispatch(actions.fetchTrendingMoviesError(error)));
};

const fetchMovieDetails = (id) => (dispatch) => {
  dispatch(actions.fetchMovieDetailsRequest());

  axios
    .get(`/movie/${id}?api_key=${apiKey}`)
    .then(({ data }) => dispatch(actions.fetchMovieDetailsSuccess(data)))
    .catch((error) => dispatch(actions.fetchMovieDetailsError(error)));
};

const fetchMovieReviews = (id) => (dispatch) => {
  dispatch(actions.fetchMovieReviewsRequest());

  axios
    .get(`/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data }) => dispatch(actions.fetchMovieReviewsSuccess(data)))
    .catch((error) => dispatch(actions.fetchMovieReviewsError(error)));
};

const fetchMovieCasts = (id) => (dispatch) => {
  dispatch(actions.fetchMovieCastsRequest());

  axios
    .get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(({ data }) => dispatch(actions.fetchMovieCastsSuccess(data.cast)))
    .catch((error) => dispatch(actions.fetchMovieCastsError(error)));
};

const addFavoriteMovie = (item) => (dispatch) => {
  dispatch(actions.addFavoriteMovieRequest());

  axios
    .post("http://localhost:4000/movies", item)
    .then(({ data }) => dispatch(actions.addFavoriteMovieSuccess(data)))
    .catch((error) => dispatch(actions.addFavoriteMovieError(error)));
};

const fetchFavoriteMovies = () => (dispatch) => {
  dispatch(actions.fetchfavoriteMoviesRequest());

  axios
    .get("http://localhost:4000/movies")
    .then(({ data }) => dispatch(actions.fetchfavoriteMoviesSuccess(data)))
    .catch((error) => dispatch(actions.fetchfavoriteMoviesError(error)));
};

const deleteFavoriteMovie = (id) => (dispatch) => {
  dispatch(actions.deleteFavoriteMovieRequest());

  axios
    .delete(`http://localhost:4000/movies/${id}`)
    .then(() => dispatch(actions.deleteFavoriteMovieSuccess(Number(id))))
    .catch((error) => dispatch(actions.deleteFavoriteMovieError(error)));
};

export default {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchMovieCasts,
  addFavoriteMovie,
  fetchFavoriteMovies,
  deleteFavoriteMovie,
};
