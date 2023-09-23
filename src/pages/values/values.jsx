import Control from "@components/control";
import { valuesActions } from "@src/store/actions";
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
          {props.values.map(({ id, value }) => (
            <motion.li
              key={id}
              initial={{ maxHeight: 0, opacity: 0, paddingBottom: 0 }}
              animate={{ maxHeight: "3em", opacity: 1, paddingBottom: "1em" }}
              exit={{ maxHeight: 0, opacity: 0, paddingBottom: 0 }}
            >
              <Control onClick={() => REMOVE_VALUE(id)}>{value}</Control>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  values: state.valuesReducer.value,
  count: state.countReducer.value,
});

const mapDispatchToProps = (dispatch) => ({
  STORE_VALUE: (value) =>
    dispatch({ type: valuesActions.STORE_VALUE, payload: { value } }),
  REMOVE_VALUE: (id) =>
    dispatch({ type: valuesActions.REMOVE_VALUE, payload: { id } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Values);
