import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//reduxでどのコンポーネントでも使えるように
import { Provider } from "react-redux";
import { store } from "./CounterRedux/store";

// ReactDOM.render(document.querySelector("#root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
