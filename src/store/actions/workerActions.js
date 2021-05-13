import * as actionTypes from "./actionTypes";

export const setWorkerInfo = (payload) => {
  return {
    type: actionTypes.SET_WORKER_INFO,
    payload: payload,
  };
};

export const getWorkerInfo = () => {
  return (dispatch) => {
    const workerInfo = await fetch(
      "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile"
    ).then((response) => response.json());
    console.log(workerInfo);
    dispatch(setWorkerInfo(workerInfo));
  };
};
