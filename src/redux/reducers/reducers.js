import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "../actions/actions";

const fetchTrendingMovies = createReducer([], {
  [actions.fetchTrendingMoviesSuccess]: (state, { payload }) => payload,
});

const fetchMoviesByQuery = createReducer([], {
  [actions.fetchMoviesByQuerySuccess]: (state, { payload }) => payload,
  [actions.clearQueryArray]: (state, { payload }) => payload,
});

const fetchMovieDetails = createReducer(
  {},
  {
    [actions.fetchMovieDetailsSuccess]: (state, { payload }) => payload,
    [actions.clearMovieDetails]: (state, { payload }) => payload,
  }
);

const fetchMovieReviews = createReducer([], {
  [actions.fetchMovieReviewsSuccess]: (state, { payload }) => payload,
  [actions.clearMovieReviews]: (state, { payload }) => payload,
});

const fetchMovieCast = createReducer([], {
  [actions.fetchMovieCastsSuccess]: (state, { payload }) => payload,
  [actions.clearMovieCast]: (state, { payload }) => payload,
});

const addFavoriteMovie = createReducer([], {
  [actions.addFavoriteMovieSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [actions.fetchfavoriteMoviesSuccess]: (state, { payload }) => payload,
  [actions.deleteFavoriteMovieSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const page = createReducer(1, {
  [actions.changePage]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchTrendingMoviesRequest]: () => true,
  [actions.fetchTrendingMoviesSuccess]: () => false,
  [actions.fetchTrendingMoviesError]: () => false,
  [actions.fetchMoviesByQueryRequest]: () => true,
  [actions.fetchMoviesByQuerySuccess]: () => false,
  [actions.fetchMoviesByQueryError]: () => false,
  [actions.fetchMovieDetailsRequest]: () => true,
  [actions.fetchMovieDetailsSuccess]: () => false,
  [actions.fetchMovieDetailsError]: () => false,
  [actions.fetchMovieReviewsRequest]: () => true,
  [actions.fetchMovieReviewsSuccess]: () => false,
  [actions.fetchMovieReviewsError]: () => false,
  [actions.fetchMovieCastsRequest]: () => true,
  [actions.fetchMovieCastsSuccess]: () => false,
  [actions.fetchMovieCastsError]: () => false,
  [actions.addFavoriteMovieRequest]: () => true,
  [actions.addFavoriteMovieSuccess]: () => false,
  [actions.addFavoriteMovieError]: () => false,
  [actions.fetchfavoriteMoviesRequest]: () => true,
  [actions.fetchfavoriteMoviesSuccess]: () => false,
  [actions.fetchfavoriteMoviesError]: () => false,
  [actions.deleteFavoriteMovieRequest]: () => true,
  [actions.deleteFavoriteMovieSuccess]: () => false,
  [actions.deleteFavoriteMovieError]: () => false,
});

export default combineReducers({
  trendingMovies: fetchTrendingMovies,
  queryMovies: fetchMoviesByQuery,
  movieDetails: fetchMovieDetails,
  reviews: fetchMovieReviews,
  cast: fetchMovieCast,
  favoriteMovies: addFavoriteMovie,
  page,
  loading,
});
