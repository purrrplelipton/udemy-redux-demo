import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { countReducer, infoReducer, valuesReducer } from "./reducers";

const reducers = combineReducers({ countReducer, valuesReducer, infoReducer });

const logger = (store) => {
  return (next) => {
    return function (action) {
      console.log("[middleware] dispatching", action);
      const result = next(action);
      console.log("[middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk));

const store = createStore(reducers, enhancer);

export default store;
