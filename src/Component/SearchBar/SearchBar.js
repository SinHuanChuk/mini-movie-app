import { Button, Input, Form, Typography } from "antd";
import { Component } from "react";
import styles from "../../Styles/SearchBar.module.css";

const { Title } = Typography;

export default class SearchBar extends Component {
  state = {
    query: "",
  };

  onChange = ({ target }) => {
    this.setState({
      query: target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
  };

  render() {
    return (
      <form className={styles.wrapper} onSubmit={this.onSubmit}>
        <Input
          className={styles.searchBar}
          type="text"
          size={"large"}
          onChange={this.onChange}
          value={this.state.query}
          placeholder = 'Find Any Movie'
        />
        <button className = {styles.btn} type = 'submit'>
          <Button size={"large"} type="primary">
            <Title level={4}>click me</Title>
          </Button>
        </button>
      </form>
    );
  }
}
