import { Rate, Typography } from "antd";
import { Component } from "react";
import { connect } from "react-redux";
import operations from "../../redux/operations/operations";
import selectors from "../../redux/selectors/selectors";
import styles from "../../Styles/Reviews.module.css";
import Loader from "react-loader-spinner";

const { Title } = Typography;

class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  };

  componentDidMount() {
    const { id } = this.props.location.state;
    const { fetchMovieReviews } = this.props;

    fetchMovieReviews(id);
  }

  render() {
    const { reviews, loading } = this.props;

    return loading ? (
      <div className={styles.loader}>
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      </div>
    ) : (
      <div className={styles.container}>
        {reviews.map((res) => (
          <div className={styles.wrapper}>
            <div>
              <Title level={2}>{res.author}</Title>
            </div>
            <div className={styles.wrap}>
              <Rate count={10} value={res.author_details.rating} />
            </div>
            <span className={styles.text}>
              {res.content.split(" ").splice(0, 120).join(" ")}.
            </span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: selectors.reviews(state),
  loading: selectors.loading(state),
});

const mapDispatchToProps = {
  fetchMovieReviews: operations.fetchMovieReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
