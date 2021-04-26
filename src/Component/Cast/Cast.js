import { Component } from "react";
import { connect } from "react-redux";
import operations from "../../redux/operations/operations";
import selectors from "../../redux/selectors/selectors";
import { Col, Row, Image } from "antd";
import styles from "../../Styles/Cast.module.css";
import Loader from "react-loader-spinner";

const imgUrl = "https://image.tmdb.org/t/p/original/";

class Cast extends Component {
  static defaultProps = {
    casts: [],
  };

  componentDidMount() {
    const { id } = this.props.location.state;
    const { fetchMovieCasts } = this.props;

    fetchMovieCasts(id);
  }

  render() {
    const { cast, loading } = this.props;

    return loading ? (
      <div className={styles.loader}>
        <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      </div>
    ) : (
      <div className={styles.wrapper}>
        <Row justify="space-around" gutter={[0, 50]}>
          {cast
            .filter((el) => el.profile_path !== null)
            .map((value) => (
              <Col span={6} key={value.id}>
                <div className={styles.container}>
                  <Image src={`${imgUrl}${value.profile_path}`} width="300px" />
                  <div className={styles.wrap}>
                    <span className={styles.text}>
                      actor: {value.original_name}
                    </span>
                    <span className={styles.text}>
                      character: {value.character}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cast: selectors.cast(state),
  loading: selectors.loading(state),
});

const mapDispatchToProps = {
  fetchMovieCasts: operations.fetchMovieCasts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cast);
