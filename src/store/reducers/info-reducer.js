import { infoActions } from "@src/store/actions";
import { v4 as uuidv4 } from "uuid";

function infoReducer(state = [], { type, payload }) {
  switch (type) {
    case infoActions.ADD_INFO: {
      const newState = [...state];
      return newState.concat({
        id: uuidv4(),
        name: payload.name,
        age: payload.age,
      });
    }
    case infoActions.REMOVE_INFO: {
      const newState = state.filter((val) => val.id !== payload);
      return [...newState];
    }

    default:
      return [...state];
  }
}

export default infoReducer;
