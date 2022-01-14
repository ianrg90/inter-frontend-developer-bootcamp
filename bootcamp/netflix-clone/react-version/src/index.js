import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MoviesProvider from "./store/MoviesProvider";

ReactDOM.render(
  <BrowserRouter>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
