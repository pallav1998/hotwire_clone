import { applyMiddleware, compose, createStore } from "redux";
import { reducerFunction } from "./reducer";

const logger1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
};

const enhancer = compose(
  applyMiddleware(logger1),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(reducerFunction, enhancer);
