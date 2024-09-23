import React, { useState } from "react";

function App() {
  var [time, setTime] = useState("TIME");

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  function triggerClock() {
    setInterval(getTime, 1000);
    getTime();
  }

  return (
    <div className="container">
      <div>
        <h1>{time}</h1>
        <button onClick={triggerClock}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
