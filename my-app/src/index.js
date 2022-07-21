/***** Setup *****/

//npx create-react-app my-app --- to create react app in my-app folder
//cd my-app --- to go to the my-app folder
//npm start --- to start the live server

//es6 react import from node_modules
import React from 'react'
//import react-dom to render stuff on the page
import ReactDom from 'react-dom'


/***** Basic Rules and Examples *****/

//can be var/const ()=> but needs capital letter in the Name to properly render later
//stateless functional component
function Part1() {
  //this is JSX not just HTML and it always returns JSX (it follows JSX rules)
  //can't return multiple sibling elements
  //can return a single parent with multiple children
  //the parent element can be <React.Fragment></React.Fragment> (shortcut <></>), good for semantics because it doesn't create a new element on the page
  //camelCase for html attributes
  //use className instead of class -- class is already a keyword in JavaScript
  //close EVERY tag i.e. <img /> <br /> <hr /> <input />
  return (
    <>
      <h1>Hello world. This is <span className='cool-class'>Vlad</span> and this is my first component!</h1>
    </>
  );
}

//return statement doesn't need parenthesis, but then it will always need the opening tag on the same line
function Part2() {
  return <div>
    <h1>Hello world! 2</h1>
  </div>
}

//same thing but with JSX syntax
const Part3 = () => {
  //needs element, props object, children (content)
  return React.createElement('h1', {}, 'Hello world! 3')
}

/***** Nested components and React Tools ******/

//Function should return <h1>John Doe</h1> and a <p>message</p>
//we can write the HTML (or JSX) in the function itself
function Part4() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>This is my message</p>
    </div>
  );
}

//or we can use nested components
//this is the basic 'root' component that is going to be rendered
function Part5() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

//these are nested components
//implicit return
const Person = () => <h1>John Doe - Component</h1>
//explicit return[[[[[[[]]]]]]][[  [[[]]]]]
const Message = () => {
  return <p>This is my message - component</p>
}

//renders stuff on page, needs the component name (preferrably in self-closed tag) and source (root id)
ReactDom.render(<Part5 />, document.getElementById('root'));