import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: {},
  error: null,
  loading: false,
};

const setWorkerInfo = (state, action) => {
  return {
    ...state,
    profile: action.payload,
  };
};

export const workerReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_WORKER_INFO:
        return setWorkerInfo(state, action);
      default:
        return state;
    }
  };
