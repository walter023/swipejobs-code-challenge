import { combineReducers } from "redux";

import { workerReducer } from "./reducers/workerReducer";
import { jobReducer } from "./reducers/jobReducer";

export const rootReducer = combineReducers({
  jobs: jobReducer,
  worker: workerReducer,
});
