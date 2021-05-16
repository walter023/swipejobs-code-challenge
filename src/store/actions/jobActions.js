import * as actionTypes from "./actionTypes";
import { EndPoints } from "@constants";

export const setJobMatches = (payload) => {
  return {
    type: actionTypes.GET_JOB_MATCHES,
    payload: payload,
  };
};
export const filterJobs = (payload) => {
  return {
    type: actionTypes.REJECT_OR_ACCEPT_JOB,
    payload: payload,
  };
};

export const displayJobMessage = (payload) => {
  return {
    type: actionTypes.DISPLAY_JOB_MESSAGE,
    payload: payload,
  };
};

export const getJobMatches = () => {
  return (dispatch) => {
    fetch(EndPoints.JOB_MATCHES)
      .then((response) => response.json())
      .then((matches) => {
        dispatch(setJobMatches(matches));
      });
  };
};

export const acceptJob = (jobId) => {
  return (dispatch) => {
    fetch(`${EndPoints.ACCEPT_JOB}/${jobId}/accept`)
      .then((response) => response.json())
      .then(({ success, message }) => {
        const payload = { message, jobId, success };
        if (success) {
          dispatch(filterJobs(payload));
        } else {
          dispatch(displayJobMessage(payload));
        }
      });
  };
};
