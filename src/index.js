import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./ducks/store/index";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';


render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root')
);
