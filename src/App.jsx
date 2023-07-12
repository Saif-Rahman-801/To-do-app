import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(40);
  const increase = (data) => {
    setCounter(counter + data);
  };
  const decrease = (data) => {
    setCounter(counter - data);
  };

  return (
    <>
      <p>The value of counter is {counter} </p>
      <button onClick={() => increase(1)}>Increase the value by One</button>
      <button onClick={() => increase(10)}>Increase the value by One</button>
      <button onClick={() => decrease(2)}>Decrease the value by Two</button>
    </>
  );
}

export default App;
