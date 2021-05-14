import * as actionTypes from "./actionTypes";
import { EndPoints } from "@constants";

export const setWorkerInfo = (payload) => {
  return {
    type: actionTypes.SET_WORKER_INFO,
    payload: payload,
  };
};

export const getWorkerInfo = () => {
  return (dispatch) => {
    fetch(EndPoints.WORKER)
      .then((response) => response.json())
      .then((workerInfo) => {
        dispatch(setWorkerInfo(workerInfo));
      });
  };
};
