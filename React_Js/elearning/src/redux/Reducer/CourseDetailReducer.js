import {FETCH_COURSE_DETAIL} from '../Action/type'
let initialState = {};
const courseDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE_DETAIL:
      state = payload;
      return {...state};
    default:
      return state;
  }
};

export default courseDetailReducer;
