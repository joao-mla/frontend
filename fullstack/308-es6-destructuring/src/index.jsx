// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour, ...otherHondaColours],
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour, ...otherTeslaColours],
} = tesla;

ReactDOM.render(
  <div>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  </div>,
  document.getElementById("root")
);
