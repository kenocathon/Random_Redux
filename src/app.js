import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configurestore";
import AppRouter from "./routers/AppRouter";
import { addFavoriteRestaurant } from "./actions/profile";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addFavoriteRestaurant("Waffle House"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
