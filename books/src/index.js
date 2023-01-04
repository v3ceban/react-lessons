//React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS imports
import './css/index.min.css';

//Importing another list for the next part of the project
import { NewList } from './newList.js';

//Main component that is going to render on the page
function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <ul className='bookList'>
        {/* Properties can be passed in the components when they are rendered*/}
        <Book job="developer" />
        <Book title="random title" number={22} />
      </ul>
    </>
  );
}

//Book component
//As other functions it can have properties passed into it. Can be named props, args, llamas, bananas, etc.
var Book = (props) => {
  //JS variable
  var description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, dolor.";
  //Console loging the properties. Use props.name to access the name property.
  console.log(props.job);
  console.log(props.title);
  return (
    <li className='book'>
      <Title />
      <Image />
      <Author />
      {/* JSX comments must be multi-line comments and must be inside {}
          Shortcut: "Ctrl+/" */}
      {/* Use {} to insert JS variables inside JSX */}
      {/* JS in JSX can't be a statement and must return a value
          i.e. can't be "let x = 6"
               can be "6" and even "3 + 3" */}
      <p>{description}</p>
      {/* Properties can be rendered on the page with JS variables 
          An empty element will be generated if there's no such property */}
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </li>
  );
}

//Components for the Book with implicit returns
var Title = () => <h2>Book Title</h2>,
  Image = () => <img src="https://placekitten.com/200/300" alt="cover" />,
  //One component with explicit return for the sake of it && inline CSS would look like this
  Author = () => { return (<p style={{ fontStyle: 'italic' }}>John Doe</p>); };


//Now let's do the same list but with JS variables and properties

//Book list component
function BookListJS() {
  return (
    <>
      <h1>Book List</h1>
      <ul className='bookList'>
        {/* Now we can pass unique properties into each book */}
        <BookJSChildrenProps
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
          description={firstBook.description}>
          {/* This is a children prop that will not be displayed unless specified later. 
              To add children props the component has to have opening and closing tag. */}
          <p>Child Paragraph</p>
        </BookJSChildrenProps>
        <BookJS
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
          description={secondBook.description}
        />
      </ul>
    </>
  );
}

//Setting up the properties for the first book
const firstBook = {
  img: 'https://placekitten.com/200/300',
  title: 'Super Ella',
  author: 'Ella The Cat',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur?'
}

//Setting up the properties for the second book
const secondBook = {
  img: 'https://placekitten.com/201/300',
  title: 'Giga Vlad',
  author: 'Vlad The Cow',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis.'
}

//Book component - takes the props from the BookList's BookJS component (img, title, author, description)
var BookJS = (props) => {
  // return (
  //   <li className='book'>
  //     <h2>{props.title}</h2>
  //     <img src={props.img} alt="cover" />
  //     <p style={{ fontStyle: 'italic' }}>By: {props.author}</p>
  //     <p>{props.description}</p>
  //   </li>
  // );
  //Another way to do that - add props into an object and use it to access props
  //Notice - no children prop here
  let { img, title, author, description } = props;
  return (
    <li className='book'>
      <h2>{title}</h2>
      <img src={img} alt="cover" />
      <p style={{ fontStyle: 'italic' }}>By: {author}</p>
      <p>{description}</p>
    </li>
  );
}

//And another way to do that - add props into the function's values
//Let's add children prop here
var BookJSChildrenProps = ({ title, img, author, description, children }) => {
  return (
    <li className='book'>
      <h2>{title}</h2>
      <img src={img} alt="cover" />
      <p style={{ fontStyle: 'italic' }}>By: {author}</p>
      <p>{description}</p>
      {children}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('bookList'));
root.render(<BookListJS />);

const root2 = ReactDOM.createRoot(document.getElementById('bookList2'));
root2.render(<NewList />);