import { createAction } from "@reduxjs/toolkit";

const fetchTrendingMoviesRequest = createAction(
  "app/fetchTrendingFilmsRequest"
);

const fetchTrendingMoviesSuccess = createAction(
  "app/fetchTrendingFilmsSuccess"
);

const fetchTrendingMoviesError = createAction("app/fetchTrendingFilmsError");

const fetchMoviesByQueryRequest = createAction("app/fetchMoviesByQueryRequest");

const fetchMoviesByQuerySuccess = createAction("app/fetchMoviesByQuerySuccess");

const fetchMoviesByQueryError = createAction("app/fetchMoviesByQueryError");

const fetchMovieDetailsRequest = createAction("app/fetchMovieDetailsRequest");

const fetchMovieDetailsSuccess = createAction("app/fetchMovieDetailsSuccess");

const fetchMovieDetailsError = createAction("app/fetchMovieDetailsError");

const fetchMovieReviewsRequest = createAction("app/fetchMovieReviewsRequest");

const fetchMovieReviewsSuccess = createAction("app/fetchMovieReviewsSuccess");

const fetchMovieReviewsError = createAction("app/fetchMovieReviewsError");

const fetchMovieCastsRequest = createAction("app/fetchMovieCastsRequest");

const fetchMovieCastsSuccess = createAction("app/fetchMovieCastsSuccess");

const fetchMovieCastsError = createAction("app/fetchMovieCastsError");

const addFavoriteMovieRequest = createAction("app/addFavoriteMovieRequest");

const addFavoriteMovieSuccess = createAction("app/addFavoriteMovieSuccess");

const addFavoriteMovieError = createAction("app/addFavoriteMovieError");

const fetchfavoriteMoviesRequest = createAction(
  "app/fetchfavoriteMoviesRequest"
);

const fetchfavoriteMoviesSuccess = createAction(
  "app/fetchfavoriteMoviesSuccess"
);

const fetchfavoriteMoviesError = createAction("app/fetchfavoriteMoviesError");

const deleteFavoriteMovieRequest = createAction(
  "app/deleteFavoriteMovieRequest"
);

const deleteFavoriteMovieSuccess = createAction(
  "app/deleteFavoriteMovieSuccess"
);

const deleteFavoriteMovieError = createAction("app/deleteFavoriteMovieError");

const changePage = createAction("app/changePage");

const clearMovieReviews = createAction("app/clearMovieReviews");

const clearQueryArray = createAction("app/clearQueryArray");

const clearMovieDetails = createAction("app/clearMovieDetails");

const clearMovieCast = createAction("app/clearMovieCast");

export default {
  fetchTrendingMoviesRequest,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesError,
  fetchMoviesByQueryRequest,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
  fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieReviewsRequest,
  fetchMovieReviewsSuccess,
  fetchMovieReviewsError,
  fetchMovieCastsRequest,
  fetchMovieCastsSuccess,
  fetchMovieCastsError,
  addFavoriteMovieRequest,
  addFavoriteMovieSuccess,
  addFavoriteMovieError,
  fetchfavoriteMoviesRequest,
  fetchfavoriteMoviesSuccess,
  fetchfavoriteMoviesError,
  deleteFavoriteMovieRequest,
  deleteFavoriteMovieSuccess,
  deleteFavoriteMovieError,
  clearQueryArray,
  clearMovieDetails,
  clearMovieReviews,
  clearMovieCast,
  changePage,
};
