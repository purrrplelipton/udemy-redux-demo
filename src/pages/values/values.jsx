import Control from "@components/control";
import { valuesActions } from "@src/store/actions";
import React from "react";
import { connect } from "react-redux";
import styles from "./values.module.css";

export const Values = (props) => {
  const { REMOVE_VALUE, STORE_VALUE } = props;
  return (
    <section>
      <Control
        className={styles["value-adder"]}
        onClick={() => STORE_VALUE(props.count)}
      >
        Store Result
      </Control>
      <ul className={styles["values-list"]}>
        {props.values.map(({ id, value }) => (
          <li key={id}>
            <Control onClick={() => REMOVE_VALUE(id)}>{value}</Control>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  values: state.valuesReducer,
  count: state.countReducer,
});

const mapDispatchToProps = (dispatch) => ({
  STORE_VALUE: (value) => dispatch(valuesActions.storeValue(value)),
  REMOVE_VALUE: (id) => dispatch(valuesActions.removeValue(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Values);
