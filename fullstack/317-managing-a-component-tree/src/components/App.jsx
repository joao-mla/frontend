import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  var itemCount = 0;

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <Item todoItem={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
