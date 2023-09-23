const initialState = { count: 0, results: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: (state.count += 1) };

    case "ADD": {
      const { payload } = action;
      return { ...state, count: (state.count += payload.value) };
    }

    case "DECREMENT":
      return { ...state, count: (state.count -= 1) };

    case "MINUS": {
      const { payload } = action;
      return { ...state, count: (state.count -= payload.value) };
    }

    default:
      return state;
  }
}

export default reducer;
