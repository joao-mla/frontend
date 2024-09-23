import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
var newNumbers = numbers.map(x => x * 2);

//////Filter - Create a new array by keeping the items that return true.
newNumbers = numbers.filter( num =>  num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)

////Find - find the first item that matches from an array.
newNumber = numbers.find(num => num > 10)

////FindIndex - find the index of the first item that matches.
newNumber = numbers.findIndex( num => num > 10)

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
