import { valuesActions } from "@src/store/actions";
import { v4 as uuidv4 } from "uuid";

function valuesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case valuesActions.STORE_VALUE: {
      const newState = [...state];
      return newState.concat({ id: uuidv4(), value: payload });
    }
    case valuesActions.REMOVE_VALUE: {
      const newState = state.filter((value) => value.id !== payload);
      return newState;
    }

    default:
      return [...state];
  }
}

export default valuesReducer;
