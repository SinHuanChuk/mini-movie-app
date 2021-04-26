import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Component/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import store from "./redux/store";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
