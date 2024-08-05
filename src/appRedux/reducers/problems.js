import { FETCH_PROBLEMS_COMMENT } from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  comments: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PROBLEMS_COMMENT: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        comments: action.payload,
      };
    }

    default:
      return state;
  }
};
