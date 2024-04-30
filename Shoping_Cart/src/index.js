import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// BrowserRouter is the parent component used to store all other components
// A router implementation that uses the HTML5 history API ({Add}pushstate, replacestate, and {remove}popstate events) to keep your UI in sync with the URL
