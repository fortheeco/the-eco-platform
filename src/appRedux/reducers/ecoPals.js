import { FETCH_PALS } from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  pals: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_PALS: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        pals: action.payload,
      };
    }

    default:
      return state;
  }
};
