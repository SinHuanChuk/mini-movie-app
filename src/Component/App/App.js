import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../Services/Routes";
import { Suspense } from "react";
import Nav from "../Nav/Nav";
import { connect } from "react-redux";
import operations from "../../redux/operations/operations";
import Loader from "react-loader-spinner";

class App extends Component {
  componentDidMount() {
    const { fetchFavoriteMovies } = this.props;

    fetchFavoriteMovies();
  }

  render() {
    return (
      <div>
        <Nav />
        <Suspense
          fallback={
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchFavoriteMovies: operations.fetchFavoriteMovies,
};

export default connect(null, mapDispatchToProps)(App);
