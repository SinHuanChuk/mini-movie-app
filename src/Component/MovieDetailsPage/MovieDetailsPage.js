import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ItemNav from "../../Pages/ItemNav";
import { lazy } from "react";
import operations from "../../redux/operations/operations";
import selectors from "../../redux/selectors/selectors";
import { connect } from "react-redux";
import { Button, Image, Typography, Rate, Checkbox } from "antd";
import styles from "../../Styles/MovieDetailsPage.module.css";

const { Link } = Typography;

const imgUrl = "https://image.tmdb.org/t/p/original/";

class MovieDetailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.movieId;
    const { fetchMovieDetails } = this.props;

    fetchMovieDetails(id);
  }

  goPrevPage = () => {
    this.props.history.goBack();
  };

  render() {
    const { url } = this.props.match;
    const { movieId } = this.props.match.params;
    const {
      movieDetails,
      addFavoriteMovie,
      deleteFavoriteMovie,
      favoriteMovie,
    } = this.props;
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.wrap}>
              <Image
                preview={false}
                src={`${imgUrl}${movieDetails.poster_path}`}
                width="300px"
              />
              {favoriteMovie.find((el) => el.id.toString() === movieId) ? (
                <Button
                  size={"large"}
                  type="primary"
                  danger
                  onClick={() => deleteFavoriteMovie(movieId)}
                >
                  <span className={styles.btnText}>delete favorite movie</span>
                </Button>
              ) : (
                <Button
                  size={"large"}
                  type="primary"
                  onClick={() => addFavoriteMovie(movieDetails)}
                >
                  <span className={styles.btnText}>add favorite movie</span>
                </Button>
              )}
            </div>
            <div className={styles.div}>
              <span className={styles.title}>
                title: {movieDetails.original_title}
              </span>
              {movieDetails.budget <= 0 ? (
                <span className={styles.text}>we dont have info of budget</span>
              ) : (
                <span className={styles.text}>
                  budget: {movieDetails.budget}$
                </span>
              )}
              <Link href={`${movieDetails.homepage}`} target="_blank">
                <span className={styles.text}>homepage of movie</span>
              </Link>
              <span className={styles.text}>
                release-data: {movieDetails.release_date}
              </span>
              <Rate count={10} value={movieDetails.vote_average} />
              <span className={styles.overview}>{movieDetails.overview}</span>
            </div>
          </div>
          <div className = {styles.prevPageContainer}>
            <Button size={"large"} type="primary" onClick={this.goPrevPage}>
              <span className={styles.btnText}>prev page</span>
            </Button>
          </div>
        </div>
        <ItemNav url={url} id={movieId} />
        <Switch>
          <Route
            path={`${url}/Reviews`}
            component={lazy(() => import("../Reviews/Reviews"))}
          />
          <Route
            path={`${url}/Cast`}
            component={lazy(() => import("../Cast/Cast"))}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: selectors.movieDetails(state),
  favoriteMovie: selectors.favoriteMovies(state),
});

const mapDispatchToProps = {
  fetchMovieDetails: operations.fetchMovieDetails,
  addFavoriteMovie: operations.addFavoriteMovie,
  deleteFavoriteMovie: operations.deleteFavoriteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
