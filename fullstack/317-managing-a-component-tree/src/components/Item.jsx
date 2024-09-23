import React, { useState } from "react";

const style = {
  textDecoration: "line-through orange",
};

function Item(props) {
  const [activeStyle, setActiveStyle] = useState(null);
  var styleTriggered = false;

  function triggerStyle() {
    styleTriggered = !styleTriggered;
    setActiveStyle(styleTriggered ? style : null);
  }

  return (
    <li style={activeStyle} onClick={triggerStyle}>
      {props.todoItem}
    </li>
  );
}

export default Item;
