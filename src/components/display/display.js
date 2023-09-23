import React from "react";
import "./display.css";

function Display(props) {
  return <h1 className="display">{props.children}</h1>;
}

export default Display;
