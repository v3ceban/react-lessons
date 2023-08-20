import React from "react";
import ReactDOM from "react-dom";

const root = document.querySelector("#root");
const content = (
	<>
		<h1>Lorem ipsum dolor sit amet.</h1>
		<ul>
			<li>Lorem, ipsum dolor.</li>
			<li>Lorem ipsum dolor sit amet.</li>
			<li>Lorem, ipsum.</li>
		</ul>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nam! Facilis, assumenda ad adipisci commodi,
			dolore blanditiis laudantium cupiditate optio, totam eum a autem animi provident odio! Optio, animi. Accusantium,
			repellendus rerum totam consectetur porro tempora. Rerum, libero harum ipsam repellat esse praesentium id. Id
			impedit hic nisi quaerat minus dolor, necessitatibus a nemo, mollitia cum consequatur saepe ipsam eligendi.
		</p>
	</>
);

//This doesn't append the actuall content, but a JavaScript object because JSX returns them
// root.append(content);
//We can stringify this to get more info about the object with JSON.stringify()
// root.append(JSON.stringify(content));

//This will interpet and render JSX objects into DOM elements such as h1 and p
ReactDOM.render(content, root);
