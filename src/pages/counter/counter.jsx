import Control from "@components/control";
import Display from "@components/display";
import { countActions } from "@src/store/actions";
import React from "react";
import { connect } from "react-redux";
import styles from "./counter.module.css";

function Counter(props) {
  const { ADD, DECREASE, INCREASE, SUBTRACT } = props;
  return (
    <div>
      <Display>{props.count}</Display>
      <fieldset className={styles["counter-controls"]}>
        <Control onClick={INCREASE}>INCREASE</Control>
        <Control onClick={ADD}>ADD 5</Control>
        <Control onClick={DECREASE}>DECREASE</Control>
        <Control onClick={SUBTRACT}>MINUS 5</Control>
      </fieldset>
    </div>
  );
}

const mapStateToProps = (state) => ({ count: state.countReducer.value });

const mapDispatchToProps = (dispatch) => ({
  INCREASE: () => dispatch({ type: countActions.INCREMENT }),
  ADD: () => dispatch({ type: countActions.ADD, payload: { value: 5 } }),
  DECREASE: () => dispatch({ type: countActions.DECREMENT }),
  SUBTRACT: () =>
    dispatch({ type: countActions.SUBTRACT, payload: { value: 5 } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
