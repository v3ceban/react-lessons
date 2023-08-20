import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";

const root = ReactDOM.createRoot(document.querySelector("#root"));
//JS variable
const app = (
	<>
		<div>
			<img src="/src/img/reactjs-icon.svg" alt="react" width="40px" height="40px" />
			<h1>React Facts</h1>
			<p>React Course - Project 1</p>
		</div>
		<div>
			<h2>Fun facts about React</h2>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100K stars on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	</>
);
//React component
import Page from "./page.jsx";

//Renders Page component that includes other components
root.render(<Page />);
