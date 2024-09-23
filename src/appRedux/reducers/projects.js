import { FETCH_PROJECTS_LIST } from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  projectlists: [],
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

    default:
      return state;
  }
};
