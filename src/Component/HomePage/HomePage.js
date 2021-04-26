import React, { Component } from "react";
import MovieList from "../MovieList/MovieList";
import operations from "../../redux/operations/operations";
import { connect } from "react-redux";
import selectors from "../../redux/selectors/selectors";
import actions from "../../redux/actions/actions";
import Pages from "../Pages/Pages";
import styles from "../../Styles/HomePage.module.css";
import Loader from "react-loader-spinner";

class HomePage extends Component {
  componentDidMount() {
    const {
      fetchTrendingMovies,
      clearMovieDetails,
      clearMovieReviews,
      clearMovieCast,
      page,
    } = this.props;

    fetchTrendingMovies(page);
    clearMovieDetails({});
    clearMovieReviews([]);
    clearMovieCast([]);
  }

  componentDidUpdate(prevProps) {
    const { page, fetchTrendingMovies } = this.props;

    if (prevProps.page !== page) {
      fetchTrendingMovies(page);
    }
  }

  render() {
    const { trendingMovies, loading, totalTrendingMovies } = this.props;

    return (
      <div>
        <h1 className={styles.title}>Trending Films</h1>
        {loading ? (
          <div className={styles.loader}>
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <MovieList movies={trendingMovies} />
        )}
        <Pages array={totalTrendingMovies} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trendingMovies: selectors.trendingMovies(state),
  totalTrendingMovies: selectors.totalTrendingMovies(state),
  loading: selectors.loading(state),
  page: selectors.page(state),
});

const mapDispatchToProps = {
  fetchTrendingMovies: operations.fetchTrendingMovies,
  clearMovieDetails: actions.clearMovieDetails,
  clearMovieReviews: actions.clearMovieReviews,
  clearMovieCast: actions.clearMovieCast,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
