const ADD_INFO = "ADD_INFO";
const REMOVE_INFO = "REMOVE_INFO";
const addInfo = (payload) => {
  return {
    type: ADD_INFO,
    payload,
  };
};
const removeInfo = (payload) => {
  return {
    type: REMOVE_INFO,
    payload,
  };
};

export { ADD_INFO, REMOVE_INFO, addInfo, removeInfo };
