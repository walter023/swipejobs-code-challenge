import React from "react";

import { Shifts } from "@components";
import { DefaultLayout } from "@layouts";

export const ShiftsScreen = ({ route }) => (
  <DefaultLayout>
    <Shifts shifts={route.params} />
  </DefaultLayout>
);
