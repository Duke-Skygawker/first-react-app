import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Greeting = () => {
  return (
    <>
      <div className="scaler">
        <img className="img-spin" src="logo512.png" alt="" />
      </div>
      <h2>My First Component</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);
