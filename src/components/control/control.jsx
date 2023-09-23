import React from "react";
import styles from "./control.module.css";

function Control(props) {
  const cns = [styles.control, props.className ? props.className : ""];

  return (
    <button
      className={cns.join(" ")}
      type={
        props.type && (props.type === "button" || "submit" || "reset")
          ? props.type
          : "button"
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Control;
