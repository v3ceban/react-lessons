import React from "react";

//Export each component individually
export function Header() {
	return (
		<header>
			<nav>
				<a href="#" className="navLink home">
					<img src="/src/img/reactjs-icon.svg" alt="react" width="40px" height="40px" />
					<h1>Llama Facts</h1>
				</a>
				<ul>
					<a href="#" className="navLink">
						<li>Page 1</li>
					</a>
					<a href="#" className="navLink">
						<li>Page 2</li>
					</a>
					<a href="#" className="navLink">
						<li>Page 3</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}

export function Main() {
	return (
		<main>
			<h2>Fun facts about Llamas</h2>
			<ol>
				<li>Llamas are native to the Andes mountains in South America</li>
				<li>Llamas have cultural significance in the Andean region</li>
				<li>Llamas communicate through a variety of sounds, including humming, clucking, and alarm calls</li>
				<li>They can spit a mixture of stomach contents and saliva at perceived threats</li>
				<li>They can live up to 20 to 30 years with proper care</li>
			</ol>
		</main>
	);
}

//Arrow function
export const Footer = () => {
	return (
		<footer>
			<small>(C) 2023 John Doe Development. All Rights Reserved.</small>
		</footer>
	);
};
