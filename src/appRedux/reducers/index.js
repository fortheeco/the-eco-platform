import { combineReducers } from "redux";

import userProfile from "./userProfile";
import problems from "./problems";
import ecoPals from "./ecoPals";
import projects from "./projects";

const reducers = combineReducers({
  userProfile: userProfile,
  problems: problems,
  ecoPals: ecoPals,
  projects: projects,
});

export default reducers;
