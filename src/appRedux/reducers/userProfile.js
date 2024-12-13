import { GET_USER } from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  userD: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        userD: action.payload,
      };
    }

    default:
      return state;
  }
};
