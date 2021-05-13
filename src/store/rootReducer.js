import { combineReducers } from "redux";

import { workerReducer } from "./reducers/workerReducer";

export const rootReducer = combineReducers({
  jobs: {},
  worker: workerReducer,
});
