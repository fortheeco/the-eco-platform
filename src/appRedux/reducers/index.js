import { combineReducers } from "redux";

import userProfile from "./userProfile";
import problems from "./problems";

const reducers = combineReducers({
  userProfile: userProfile,
  problems: problems,
});

export default reducers;
