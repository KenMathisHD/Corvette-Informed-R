import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
import "./styles/common/pageFooter.css";
import "./styles/home/generation/genPage.css";
import "./styles/home/generation/year/yearPage.css";
import "./styles/home/generation/year/yearTabs.css";
import "./styles/notFound.css";
import "./styles/news-forums/newsandforums.css";

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
