import React from "react";
import styles from "./control.module.css";

function Control(props) {
  return (
    <button className={styles.control} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Control;
