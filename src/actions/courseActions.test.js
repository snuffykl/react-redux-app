import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS action", () => {
      // arrange
      const course = {id: "event-sourcing", title: "Event Sourcing"};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // act
      const action = courseActions.createSourceSuccess(course);

      // assert
      expect(action).toEqual(expectedAction);

    });
  });
});
