import { FETCH_PROJECTS_LIST, FETCH_PROJECTS_DETAILS } from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  projectlists: [],
  projectDetails: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_LIST: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        projectlists: action.payload,
      };
    }
    case FETCH_PROJECTS_DETAILS: {
      return {
        ...state,

        projectDetails: action.payload,
      };
    }
    default:
      return state;
  }
};
