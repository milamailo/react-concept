{
  /* body {
            background-color: rgb(48, 75, 22);
        }
        .center {
            background-color: rgb(220, 237, 152);
            border: 5px solid whitesmoke;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
            color: rgb(45, 75, 76);
            box-shadow: 2px 3px 7px rgb(156, 151, 139);
            text-align: center;
            }
        button {
            background-color: cadetblue;
            border-radius: 5px;
            padding: 5px;
            text-align: center;
            color: whitesmoke;
        } */
}

// Components are Javascript functions
// Props is an object and is read-only information that's passed to components.
// State is information that can change over time, usually triggered by user interaction.

import { useState } from "react";
// import styles from "./index.css";

// Style
const headerStyle = {
  fontSize: "24px",
  color: "blue",
};
const buttonStyle = {
  backgroundColor: "cadetblue",
  borderRadius: "5px",
  padding: "5px",
  textAlign: "center",
  color: "whitesmoke",
};
const centerStyle = {
  backgroundColor: "rgb(220, 237, 152)",
  border: "5px solid whitesmoke",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
  color: "rgb(45, 75, 76)",
  boxShadow: "2px 3px 7px rgb(156, 151, 139)",
  textAlign: "center",
};

// Component
function Header({ title }) {
  // Props
  return <h1 style={headerStyle}>{title ? title : "Increment"}.</h1>;
}

// Component
export default function HomePage() {
  // State
  const [likes, setLikes] = useState(0);

  // Event Handler
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div className={centerStyle}>
      <Header title="Increment likes" />
      <button style={buttonStyle} onClick={handleClick}>
        👍 ({likes})
      </button>
    </div>
  );
}
