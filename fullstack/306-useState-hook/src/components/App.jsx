import React, { useState } from "react";

function App() {
  var [count, setCount] = useState(0);

  function increaseCount() {
    setCount(++count);
  }

  function decreaseCount() {
    setCount(--count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default App;
