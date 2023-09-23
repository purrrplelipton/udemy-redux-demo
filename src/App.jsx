import React from "react";
import "./App.css";
import { Counter, Info, Values } from "./pages";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <Values />
      <hr />
      <Info />
    </>
  );
}

export default App;
