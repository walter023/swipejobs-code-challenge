import * as actionTypes from "../actions/actionTypes";

const initialState = {
  matches: [],
  error: null,
  loading: false,
};

const setJobMatches = (state, action) => {
  return {
    ...state,
    matches: [...action.payload],
  };
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_JOB_MATCHES:
      return setJobMatches(state, action);
    default:
      return state;
  }
};
