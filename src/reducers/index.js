import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  // Short hand property name in ES6
  courses,
  authors
});

export default rootReducer;
