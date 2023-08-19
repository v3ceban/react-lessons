import ReactDOM from "react-dom";

//Create element as a variable
const element1 = <h1>Hello React with NPM</h1>;
//Create root as a variable
const header = ReactDOM.createRoot(document.querySelector("header"));
//Render at root
header.render(element1);

//Create element as React component
function Element2() {
	return (
		<>
			<h2>Lorem ipsum dolor sit amet.</h2>
			<ul>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
			</ul>
		</>
	);
}
//Create variable to use to render
const main = document.querySelector("main");
//Render specifying the content and target
ReactDOM.render(<Element2 />, main);

//Create element as React component and render in one line
function Element3() {
	return (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error amet commodi tempore enim dolorem,
			ratione assumenda nulla vero qui? Veniam voluptatibus sed aut dolore porro culpa optio odio non tenetur. Beatae
			consequuntur dicta dignissimos distinctio voluptate sapiente eos ipsum vero reprehenderit provident voluptatem
			quasi vitae quos dolor, illo labore fugit cumque commodi id repellendus debitis nam corrupti odit ab. Ipsum sit
			recusandae ab!
		</p>
	);
}
// ReactDOM.render(<Element3 />, document.querySelector("footer"));
//Define footer as HTML element
const footer = document.querySelector("footer");
//Create root JSX component
const footerRoot = ReactDOM.createRoot(footer);
//Render Element3 JSX component at specified root
footerRoot.render(<Element3 />);
