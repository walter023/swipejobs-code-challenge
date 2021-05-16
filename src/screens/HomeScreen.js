import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { JobCard } from "@components";
import { DefaultLayout } from "@layouts";
import { getJobMatches, getWorkerInfo } from "@store";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkerInfo());
    dispatch(getJobMatches());
  }, []);

  return (
    <DefaultLayout>
      <JobCard />
    </DefaultLayout>
  );
};
