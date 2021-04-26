import React, { Component } from "react";
import { connect } from "react-redux";
import selectors from "../../redux/selectors/selectors";
import MovieList from "../MovieList/MovieList";
import actions from "../../redux/actions/actions";
import SearchBarFavoriteMovie from "../SearchBar/SearchBarFavoriteMovie";
import Loader from "react-loader-spinner";
import styles from "../../Styles/FavoriteMovies.module.css";

class FavoriteMovies extends Component {
  static defaultProps = {
    favoriteMovies: [],
  };

  state = {
    query: "",
  };

  componentDidMount() {
    const {
      clearMovieDetails,
      clearMovieCast,
      clearMovieReviews,
      clearQueryArray,
    } = this.props;

    clearMovieDetails({});
    clearMovieCast([]);
    clearMovieReviews([]);
    clearQueryArray([]);
  }

  searchFavMovie = (value) => {
    this.setState({
      query: value,
    });
  };

  render() {
    const { favoriteMovies, loading } = this.props;
    const { query } = this.state;

    return (
      <div>
        {favoriteMovies.length > 0 && (
          <SearchBarFavoriteMovie SearchFavMovie={this.searchFavMovie} />
        )}
        {loading ? (
          <div className={styles.loader}>
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <MovieList
            movies={favoriteMovies.filter((el) =>
              el.title.toLowerCase().includes(query)
            )}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoriteMovies: selectors.favoriteMovies(state),
  loading: selectors.loading(state),
});

const mapDispatchToProps = {
  clearMovieDetails: actions.clearMovieDetails,
  clearMovieCast: actions.clearMovieCast,
  clearMovieReviews: actions.clearMovieReviews,
  clearQueryArray: actions.clearQueryArray,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
