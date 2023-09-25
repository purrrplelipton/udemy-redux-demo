const STORE_VALUE = "STORE_VALUE";
const REMOVE_VALUE = "REMOVE_VALUE";
const storeValue = (payload) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: STORE_VALUE, payload });
    }, 2000);
  };
};
const removeValue = (payload) => {
  return {
    type: REMOVE_VALUE,
    payload,
  };
};

export { REMOVE_VALUE, STORE_VALUE, removeValue, storeValue };
