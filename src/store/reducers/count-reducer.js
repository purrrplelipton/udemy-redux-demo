import { countActions } from "@src/store/actions";

function countReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case countActions.INCREMENT:
      return { ...state, value: (state.value += 1) };

    case countActions.ADD: {
      const { payload } = action;
      return { ...state, value: (state.value += payload.value) };
    }

    case countActions.DECREMENT:
      return { ...state, value: (state.value -= 1) };

    case countActions.SUBTRACT: {
      const { payload } = action;
      return { ...state, value: (state.value -= payload.value) };
    }

    default:
      return state;
  }
}

export default countReducer;
