var root = document.querySelector("#root");

var p = document.createElement("p");
p.textContent = "This is regular HTML";
p.className = "header";

//JSX - JavaScript XML
//className == class
var element = <p className="header">This is a JSX element</p>;
//only returns one element (multiple elements have to be wrapped in a single parent element)
var page = (
	<div>
		<h2 className="header">JSX Header</h2>
		<p>JSX Paragraph</p>
	</div>
);

//Returns paragraph
console.log(p);
//Returns JS object
console.log(element);

ReactDOM.render(page, root);
