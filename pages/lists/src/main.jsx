import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Homework from "./homework";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <hr />
    <Homework />
  </React.StrictMode>,
);
