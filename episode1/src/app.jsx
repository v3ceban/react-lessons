/* eslint-disable react/prop-types */

// variables
const name = "Jack"; // can be a data type
const age = <li>69</li>; // can be jsx
const email = <li>qwe@asd.zxc</li>;
const header = <h2>Your Data:</h2>;
const userData = // can be a big chunk of jsx
  (
    <>
      {header}
      <ul>
        <li>{name}</li>
        {age}
        {email}
      </ul>
    </>
  );

// components
const User = () => {
  // component name has to start with uppercase letter
  return (
    <>
      {header}
      <ul>
        <li>{name}</li>
        {age}
        {email}
      </ul>
    </>
  );
};

// components with props
const UserProps = (props) => {
  return (
    <>
      {header}
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        {props.email}
      </ul>
    </>
  );
};

export default function App() {
  return (
    <>
      <h1>Hello {name}</h1>
      {userData}
      <User />
      <UserProps name="Jack2" age={21} email={<li>qwe2@asd.zxc</li>} />
    </>
  );
}
