import { useState } from "react";

export default function App() {
  // variables
  let counter = 0;
  // states
  const [stateCounter, updCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Type something here");
  const [showText, setShowText] = useState(true);
  const [textcColor, setTextColor] = useState("black");

  // functions
  const increaseCounterJS = () => {
    counter++;
    document.getElementById("counter").innerHTML = `Counter: ${counter}`;
  };

  const increaseCounter = () => {
    updCounter(stateCounter + 1);
    console.log(stateCounter + 1);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setInputValue("Type something here");
    }
    setTextColor(randomColor());
  };

  const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    if (Math.floor(Math.random() * 2) > 0) {
      return `rgb(${r},${g},${b})`;
    } else {
      return "black";
    }
  };

  return (
    <>
      <h1>Use State Hook</h1>
      <main>
        <p id="counter">Counter: {counter}</p>
        <button onClick={increaseCounterJS}>Click Me</button>
        <p>State Counter: {stateCounter}</p>
        <button onClick={increaseCounter}>Click me too</button>
        <h2>Type something</h2>
        <label>
          Type something: <input type="text" onChange={handleInput} />
        </label>
        <section>
          {showText && <h2 style={{ color: textcColor }}>{inputValue}</h2>}
          <button
            onClick={() => {
              setShowText(!showText);
            }}
          >
            Show/Hide
          </button>
          <p>Color is: {textcColor === "black" ? "black" : textcColor}</p>
        </section>
      </main>
    </>
  );
}
