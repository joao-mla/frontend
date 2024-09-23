import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Contact(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My Contacts</h1>

      <Contact
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        contact="+123 456 789"
        email="b@beyonce.com"
      ></Contact>
      <Contact
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        contact="+987 654 321"
        email="jack@nowhere.com"
      ></Contact>
      <Contact
        name="Beyonce (Other)"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        contact="+123 456 783"
        email="beybey@beyonce.com"
      ></Contact>
    </div>
  );
}

export default App;
