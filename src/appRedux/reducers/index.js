import { combineReducers } from "redux";

import userProfile from "./userProfile";
import problems from "./problems";
import ecoPals from "./ecoPals";

const reducers = combineReducers({
  userProfile: userProfile,
  problems: problems,
  ecoPals: ecoPals,
});

export default reducers;
