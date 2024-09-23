import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}></Avatar>
      </div>
      <div className="bottom">
        <Info text={props.tel} />
        <Info text={props.email} />
      </div>
    </div>
  );
}

export default Card;
