import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";

// Action creator
export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createSourceSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateSourceSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi.saveCourse(course)
      .then(savedCourse => {
          course.id ? dispatch(updateSourceSuccess(savedCourse)) :
            dispatch(createSourceSuccess(savedCourse));
      })
      .catch(error => {
        throw(error);
      });
  };
}
