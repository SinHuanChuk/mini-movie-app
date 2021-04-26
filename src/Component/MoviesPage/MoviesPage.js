import { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import queryString from "query-string";
import MovieList from "../MovieList/MovieList";
import { connect } from "react-redux";
import operations from "../../redux/operations/operations";
import selectors from "../../redux/selectors/selectors";
import actions from "../../redux/actions/actions";
import Pages from "../Pages/Pages";
import Loader from "react-loader-spinner";
import styles from "../../Styles/MoviesPage.module.css";

class MoviesPage extends Component {
  static defaultProps = {
    movies: [],
  };

  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    const {
      fetchMoviesByQuery,
      clearMovieDetails,
      clearMovieReviews,
      clearMovieCast,
      page,
    } = this.props;

    if (query) {
      fetchMoviesByQuery(query, page);
      clearMovieDetails({});
      clearMovieReviews([]);
      clearMovieCast([]);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { fetchMoviesByQuery, page } = this.props;

    if (prevQuery !== nextQuery || prevProps.page !== page) {
      fetchMoviesByQuery(nextQuery, page);
    }
  }

  onSubmit = (value = "") => {
    if (value !== "") {
      this.props.history.push({
        ...this.props.location,
        search: `query=${value}`,
      });
    }
  };

  render() {
    const { movies, loading, totalMovies } = this.props;

    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        {loading ? (
          <div className = {styles.loader}>
          <Loader type="Puff" color="#00BFFF" height={80} width={80} />
        </div>
        ) : (
          <MovieList movies={movies.filter((el) => el.poster_path !== null)} />
        )}
        <Pages array={totalMovies} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: selectors.queryMovies(state),
  loading: selectors.loading(state),
  page: selectors.page(state),
  totalMovies: selectors.totalQueryMovies(state),
});

const mapDispatchToProps = {
  fetchMoviesByQuery: operations.fetchMoviesByQuery,
  clearMovieDetails: actions.clearMovieDetails,
  clearMovieReviews: actions.clearMovieReviews,
  clearMovieCast: actions.clearMovieCast,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
