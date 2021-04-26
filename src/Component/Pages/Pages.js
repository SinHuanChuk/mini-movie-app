import React, { Component } from "react";
import { Pagination } from "antd";
import actions from '../../redux/actions/actions'
import { connect } from "react-redux";
import styles from '../../Styles/Pagination.module.css'

class Pages extends Component {
  render() {
    const { array, changePage } = this.props;

    return (
      <div className = {styles.wrapper}>
        <Pagination
        defaultCurrent={1}
        total={array.total_results}
        pageSizeOptions={[20]}
        pageSize={20}
        onChange={(e) => changePage(e)}
      />
      </div>
    );
  }
}

const mapDispatchToProps = {
    changePage: actions.changePage
}

export default connect(null, mapDispatchToProps)(Pages)