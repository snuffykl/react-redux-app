import expect from "expect";
import {createStore} from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

describe("Store", () => {
  it("should handle creating courses", ()=> {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {title: "Event Sourcing"};

    // act
    const action = courseActions.createSourceSuccess(course);
    store.dispatch(action);

    // arrange
    const actual = store.getState().courses[0];
    const expected = {title: "Event Sourcing"};

    expect(actual).toEqual(expected);
  });
});
