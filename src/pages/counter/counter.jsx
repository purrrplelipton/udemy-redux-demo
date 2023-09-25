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

const mapStateToProps = (state) => ({ count: state.countReducer });

const mapDispatchToProps = (dispatch) => ({
  INCREASE: () => dispatch(countActions.increment()),
  ADD: () => dispatch(countActions.add(5)),
  DECREASE: () => dispatch(countActions.decrement()),
  SUBTRACT: () => dispatch(countActions.subtract(5)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
