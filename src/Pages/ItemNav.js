import { Link } from "react-router-dom";
import { Row } from "antd";
import styles from "../Styles/ItemNav.module.css";

const ItemNav = ({ url, id }) => (
  <div className = {styles.container}>
    <Row justify="space-around" wrap={false} gutter={[0, 0]}>
      <Link
        to={{
          pathname: `${url}/Reviews`,
          state: { from: url, id: id },
        }}
      >
        <span className={styles.text}>Reviews</span>
      </Link>
      <Link
        to={{
          pathname: `${url}/Cast`,
          state: { from: url, id: id },
        }}
      >
        <span className={styles.text}>Cast</span>
      </Link>
    </Row>
  </div>
);

export default ItemNav;
