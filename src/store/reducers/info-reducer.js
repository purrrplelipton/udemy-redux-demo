import { infoActions } from "@src/store/actions";
import { v4 as uuidv4 } from "uuid";

function infoReducer(state = { value: [] }, { type, payload }) {
  switch (type) {
    case infoActions.ADD_INFO:
      return {
        ...state,
        value: [
          ...state.value,
          { id: uuidv4(), name: payload.name, age: payload.age },
        ],
      };
    case infoActions.REMOVE_INFO: {
      const newValue = state.value.filter((val) => val.id !== payload.id);
      return {
        ...state,
        value: newValue,
      };
    }

    default:
      return state;
  }
}

export default infoReducer;
