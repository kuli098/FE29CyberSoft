import { combineReducers } from "redux";
import courseReducer from "./CourseReducer";
import courseDetailReducer from "./CourseDetailReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  //state
  courseList: courseReducer,
  courseDetail: courseDetailReducer,
  user: UserReducer
});

export default RootReducer;
