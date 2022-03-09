import { createStore, applyMiddleware } from "redux";
import { composeWIthDevtools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWIthDevtools(applyMiddleware)
);

export default store;
