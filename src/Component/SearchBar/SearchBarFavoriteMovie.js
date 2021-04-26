import { Input } from "antd";
import React from "react";
import styles from "../../Styles/SearchBarFavoriteMovie.module.css";

const SearchBarFavoriteMovie = ({ SearchFavMovie }) => (
  <Input
    className={styles.searchBar}
    size={"large"}
    placeholder="Find Favorite Movie"
    onChange={({ target }) => SearchFavMovie(target.value.toLowerCase())}
    type="text"
  />
);

export default SearchBarFavoriteMovie;
