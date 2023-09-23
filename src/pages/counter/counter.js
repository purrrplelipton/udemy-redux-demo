import React from "react";
import { connect } from "react-redux";
import Control from "../../components/control";
import Display from "../../components/display";
import "./counter.css";

function Counter(props) {
  return (
    <div className="counter">
      <Display>{props.count}</Display>
      <fieldset>
        <Control onClick={props.increment}>INCREASE</Control>
        <Control onClick={props.add}>ADD 5</Control>
        <Control onClick={props.decrement}>DECREASE</Control>
        <Control onClick={props.minus}>MINUS 5</Control>
      </fieldset>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => ({ count: state.count });

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  add: () => dispatch({ type: "ADD", payload: { value: 5 } }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  minus: () => dispatch({ type: "MINUS", payload: { value: 5 } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
