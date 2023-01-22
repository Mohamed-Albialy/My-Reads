import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// when install react router import BrowserRouter
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* wrap App by BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
