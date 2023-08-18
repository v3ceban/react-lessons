var rootV = document.querySelector("#rootV");
var rootR = document.querySelector("#rootR");

//Imperative programming: show what to do step by step
const p = document.createElement("p");
p.className = "header";
p.textContent = "Vanilla JS";
rootV.append(p);

//Declarative programming: only tell what to do
ReactDOM.render(<p className="header">React JS</p>, rootR);

//Use "className" instead of "class" to add class to an HTML tag
