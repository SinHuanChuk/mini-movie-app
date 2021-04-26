import React from "react";
import { Col, Row, Typography,} from "antd";
import styles from "../../Styles/Nav.module.css";

const { Title, Link } = Typography;

const Nav = () => (
  <div className={styles.wrapper}>
    <Row
      justify="space-around"
      wrap={false}
      gutter={[0, 0]}
    >
      <Link href="/">
        <span className={styles.text}>Home Page</span>
      </Link>
      <Link href="/MoviesPage">
        <span className={styles.text}>Movies Page</span>
      </Link>
      <Link href="/FavoriteMovies">
        <span className={styles.text}>Favorite Movies</span>
      </Link>
    </Row>
  </div>
);

export default Nav