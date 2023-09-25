const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const increment = () => {
  return {
    type: INCREMENT,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
  };
};
const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
const subtract = (payload) => {
  return {
    type: SUBTRACT,
    payload,
  };
};

export {
  ADD,
  DECREMENT,
  INCREMENT,
  SUBTRACT,
  add,
  decrement,
  increment,
  subtract,
};
