import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";

import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
