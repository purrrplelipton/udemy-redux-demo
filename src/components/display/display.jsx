import React from "react";
import styles from "./display.module.css";

function Display(props) {
  return <h1 className={styles.display}>{props.children}</h1>;
}

export default Display;
