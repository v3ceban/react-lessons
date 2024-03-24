import React from "react";
import ReactDOM from "react-dom/client";
import pages from "./pages.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      {pages.map((page, index) => (
        <li key={index}>
          <a href={`/pages/${page}/`}>{page}</a>
        </li>
      ))}
    </>
  </React.StrictMode>,
);
