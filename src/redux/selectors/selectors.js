import { createSelector } from "reselect";

const totalTrendingMovies = (state) => state.trendingMovies;

const trendingMovies = ( state) => state.trendingMovies.results;

const loading = (state) => state.loading;

const queryMovies = (state) => state.queryMovies.results;

const totalQueryMovies = (state) => state.queryMovies;

const movieDetails = (state) => state.movieDetails;

const reviews = (state) => state.reviews.results;

const cast = (state) => state.cast;

const favoriteMovies = (state) => state.favoriteMovies;

const page = (state) => state.page;

export default {
  totalTrendingMovies,
  trendingMovies,
  queryMovies,
  totalQueryMovies,
  movieDetails,
  reviews,
  cast,
  loading,
  favoriteMovies,
  page,
};
