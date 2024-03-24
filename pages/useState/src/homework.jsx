import { useState } from "react";

export default function Homework() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (action) => {
    if (action === 0) {
      setCounter(0);
      return;
    }
    setCounter(counter + action);
  };

  return (
    <>
      <hr />
      <h2>Homework counter: {counter}</h2>
      <button onClick={() => handleCounter(-1)}>Decrease</button>
      <button onClick={() => handleCounter(0)}>Reset</button>
      <button onClick={() => handleCounter(1)}>Increase</button>
    </>
  );
}
