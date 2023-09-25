import TrashX from "@assets/vectors/trash-x";
import Control from "@components/control";
import { infoActions } from "@src/store/actions";
import React from "react";
import { connect } from "react-redux";
import styles from "./info.module.css";

function Info(props) {
  const { ADD_INFO, REMOVE_INFO } = props;

  function submitHandler(event) {
    event.preventDefault();
    const { target } = event;
    const data = { name: target["full-name"].value, age: target.age.value };
    if (data.name.length < 3) {
      target.setAttribute("data-message", "name is too short.");
      return setTimeout(() => {
        target.removeAttribute("data-message");
      }, 5000);
    }
    if (
      Number.isNaN(+data.age) ||
      data.age.length !== 2 ||
      parseInt(data.age, 10) < 18 ||
      parseInt(data.age, 10) > 60
    ) {
      target.setAttribute("data-message", "age is invalid");
      return setTimeout(() => {
        target.removeAttribute("data-message");
      }, 5000);
    }
    ADD_INFO({ ...data, age: parseInt(data.age, 10) });
    target["full-name"].value = "";
    target.age.value = "";
  }

  return (
    <section className={styles["info-section"]}>
      <h1>Infos</h1>
      <form onSubmit={submitHandler}>
        <input
          autoComplete="off"
          type="text"
          name="full-name"
          placeholder="Full Name"
        />
        <input autoComplete="off" type="text" name="age" placeholder="Age" />
        <Control type="submit">Save</Control>
      </form>
      <hr />
      <ul>
        {props.infos.map((info) => (
          <li key={info.id}>
            <p>
              {info.name}&nbsp;~&nbsp;{info.age}
            </p>
            <Control
              className={styles.trash}
              onClick={() => REMOVE_INFO(info.id)}
            >
              <TrashX />
            </Control>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => ({ infos: state.infoReducer });

const mapDispatchToProps = (dispatch) => ({
  ADD_INFO: (data) => dispatch(infoActions.addInfo(data)),
  REMOVE_INFO: (id) => dispatch(infoActions.removeInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
