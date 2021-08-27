import { createStore } from "redux";
import { reducerFunction } from "./reducer";

export const store = createStore(reducerFunction)