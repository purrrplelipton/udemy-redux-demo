import React from "react";
import "./control.css";

function Control(props) {
  return (
    <button className="control" type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Control;
