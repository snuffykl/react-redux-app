import {combineReducers} from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  // Short hand property name in ES6
   courses
});

export default rootReducer;
