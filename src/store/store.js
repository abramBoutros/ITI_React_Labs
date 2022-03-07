import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/combineReducers";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducers, applyMiddleware(thunk));
