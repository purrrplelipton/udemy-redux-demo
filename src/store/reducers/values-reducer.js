import { valuesActions } from "@src/store/actions";
import { v4 as uuidv4 } from "uuid";

function valuesReducer(state = { value: [] }, action) {
  const { type, payload } = action;
  switch (type) {
    case valuesActions.STORE_VALUE:
      return {
        ...state,
        value: [...state.value, { id: uuidv4(), value: payload.value }],
      };

    case valuesActions.REMOVE_VALUE: {
      const newValue = state.value.filter((val) => val.id !== payload.id);
      return { ...state, value: newValue };
    }

    default:
      return state;
  }
}

export default valuesReducer;
