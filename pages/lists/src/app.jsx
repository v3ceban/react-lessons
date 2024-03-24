/* eslint-disable react/prop-types */
import "./app.css"; // regular css
import styles from "./app.module.css"; // css module. used as an object

// const age = 15;
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }
//
// age >= 18 ? console.log("Adult") : console.log("Child"); // if else statement
// age >= 18 && console.log("Adult"); // if statement

export default function App() {
  const age = 18;
  const isGreen = false;

  const names = ["Jamie", "Sarah", "Alex"];

  const users = [
    { name: "Jamie", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 17 },
  ];

  function isAdult(age) {
    let adult = false;
    if (age >= 18) {
      adult = true;
    }
    return adult;
  }

  function User(props) {
    return (
      <li>
        {props.name} is {props.age} years old.
        {props.name} is {isAdult(props.age) ? "an adult" : "a child"}
      </li>
    );
  }

  return (
    <>
      <h1 className={styles.header}>Ternary operators, Lists, CSS modules</h1>
      <h2>
        Jamie is {age} years old. He is {age >= 18 ? "an adult" : "a child"}
      </h2>
      <p style={{ color: isGreen ? "green" : "red" }}>
        This has color {isGreen ? "green" : "red"}
      </p>
      <h2>Names</h2>
      <ul>
        {names.map((name, key) => {
          return <li key={key}>{name}</li>;
        })}
      </ul>
      <h2>Users array</h2>
      <ul>
        {users.map((user, key) => {
          return (
            <li key={key}>
              {user.name} is {user.age} years old. {user.name} is{" "}
              {isAdult(user.age) ? "an adult" : "a child"}
            </li>
          );
        })}
      </ul>
      <h2>User component</h2>
      <ul>
        {users.map((user, key) => {
          return <User key={key} name={user.name} age={user.age} />;
        })}
      </ul>
    </>
  );
}
