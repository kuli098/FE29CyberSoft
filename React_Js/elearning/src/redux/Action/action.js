import { FETCH_COURSE_DETAIL } from "./type";
import CourseService from "../../Services/CourseService";

const courseService = new CourseService();
const reduxAction = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
};

export const fetchCourseDetail = () => {
  return dispatch => {
    courseService
      .fetchCourseDetail()
      .then(res => {
        dispatch(reduxAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export default reduxAction;
