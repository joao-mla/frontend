import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registered && <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.loggedIn ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
