import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// eslint-disable-next-line no-extend-native
Array.prototype.replace = function (idx, val) {
  const realIndex = idx < 0 ? this.length + idx : idx;
  return this.map((e, i) => (i === realIndex ? val : e));
};
