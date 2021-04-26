import { Col, Row, Image} from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/MovieList.module.css";

const MovieList = ({ movies = [] }) => {
  return (
    <Row justify="space-around" gutter={[0, 20]}>
      {movies.map((el) => (
        <div>
          <Col span={5}>
            <Image
              width={350}
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            />
            <Link to={`/MoviesPage/${el.id}`}>
              <div className={styles.title}>
                <span className={styles.text} key={el.id}>
                  {el.title}
                </span>
              </div>
            </Link>
          </Col>
        </div>
      ))}
    </Row>
  );
};

export default MovieList;
