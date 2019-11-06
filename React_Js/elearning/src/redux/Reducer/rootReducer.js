import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";
import courseDetailReducer from "./CourseDetailReducer";

const RootReducer = combineReducers({
  //state
  courseList: courseReducer,
  courseDetail: courseDetailReducer
});

export default RootReducer;
