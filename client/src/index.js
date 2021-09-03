import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
import "./styles/navheader.css";
import "./styles/home.css";
import "./styles/slides.css";
import "./styles/generations.css";
import "./styles/pageFooter.css";
import "./styles/genPage.css";
import "./styles/yearPage.css";
import "./styles/yearTabs.css";
import "./styles/gallery.css";
import "./styles/pagination.css";
import "./styles/notFound.css";
import "./styles/newsandforums.css";

// import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
