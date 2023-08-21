// import React from "react";
//It's better to import images this way rather then pointing to them with the img src attr
import reactLogo from "/src/assets/reactjs-icon.svg";

const Navbar = () => {
	return (
		<header>
			<nav className="logo">
				<img src={reactLogo} alt="ReactJS Logo" />
				<h1>ReactFacts</h1>
			</nav>
			<h2>React Course - Project 1</h2>
		</header>
	);
};

//arrow function needs to be set to a file type before exporting default
export default Navbar;
