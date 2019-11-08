import { FETCH_COURSE } from "../Action/type";
let initialState = [];
const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSE:
      state = payload;
      return [...state];
    default:
      return state;
  }
};

export default courseReducer;
