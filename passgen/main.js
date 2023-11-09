import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="#">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="#">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Ella!</h1>
    <div class="card">
      <button id="counter" type="button">Click Me</button>
    </div>
    <p class="read-the-docs">
      Click the button to generate a password
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
