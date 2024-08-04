import {
  FETCH_PALS,
  FOLLOWING,
  FOLLOWERS,
  PENDING_FOLLOWERS,
} from "../constants";
// import { getSession } from 'appRedux/store/cookies';

const INIT_STATE = {
  pals: [],
  following: [],
  followers: [],
  pendingFollowers: [],
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
    case FOLLOWING: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        following: action.payload,
      };
    }
    case FOLLOWERS: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        followers: action.payload,
      };
    }
    case PENDING_FOLLOWERS: {
      //localStorage.setItem('user', action.payload)
      return {
        ...state,
        //loader: false,
        pendingFollowers: action.payload,
      };
    }
    default:
      return state;
  }
};
