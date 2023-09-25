import { countActions } from "@src/store/actions";

function countReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case countActions.INCREMENT:
      return state + 1;

    case countActions.ADD:
      return state + payload;

    case countActions.DECREMENT:
      return state - 1;

    case countActions.SUBTRACT:
      return state - payload;

    default:
      return state;
  }
}

export default countReducer;
