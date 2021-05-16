import * as actionTypes from "../actions/actionTypes";

const initialState = {
  matches: [],
  message: undefined,
  success: true,
};

const setJobMatches = (state, action) => {
  return {
    ...state,
    matches: [...action.payload],
  };
};
const filterJobs = (state, { payload }) => {
  return {
    ...state,
    matches: state.matches.filter((job) => job.jobId !== payload.jobId),
    message: payload.message,
    success: payload.success,
  };
};
export const displayJobMessage = (state, { payload }) => {
  return {
    ...state,
    message: payload.message,
    success: payload.success,
  };
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_JOB_MATCHES:
      return setJobMatches(state, action);
    case actionTypes.REJECT_OR_ACCEPT_JOB:
      return filterJobs(state, action);
    case actionTypes.DISPLAY_JOB_MESSAGE:
      return displayJobMessage(state, action);
    default:
      return state;
  }
};
