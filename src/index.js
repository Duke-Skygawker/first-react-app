import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Booklist from "./components/Booklist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
