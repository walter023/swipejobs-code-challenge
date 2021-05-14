import * as actionTypes from "./actionTypes";
import { EndPoints } from "@constants";

export const setJobMatches = (payload) => {
  return {
    type: actionTypes.GET_JOB_MATCHES,
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