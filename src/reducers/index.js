import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  // Short hand property name in ES6
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
