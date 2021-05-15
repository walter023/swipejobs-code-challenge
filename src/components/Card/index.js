import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { useSelector } from "react-redux";

import { Margin } from "@styles";
import { Label } from "@constants";

import { Button } from "../Button";
import { HeaderCard } from "../HeaderCard";
import { HighlightLabel } from "../HighlightLabel";
import {
  LocationLabel,
  ReportToLabel,
  RequirementLabel,
  ShiftLabel,
} from "../Label";

export const JobCard = ({ style }) => {
  const { matches } = useSelector((state) => state.jobs);

  return matches.map((matchedJob, index) => {
    const onTop = index === matches.length - 1;
    return (
      onTop && (
        <View style={[styles.container, style]} key={matchedJob.jobId}>
          <HeaderCard job={matchedJob} style={styles.header} />
          <HighlightLabel job={matchedJob} style={styles.HighlightLabel} />
          <ShiftLabel job={matchedJob} />
          <LocationLabel job={matchedJob} />
          <RequirementLabel job={matchedJob} />
          <ReportToLabel job={matchedJob} />
          <View style={styles.buttonContainer}>
            <Button title={Label.BUTTON_REJECT}  />
            <Button title={Label.BUTTON_ACCEPT} inverted style={styles.acceptButton} />
          </View>
        </View>
      )
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: -Margin.MEDIUM,
  },
  HighlightLabel: {
    marginTop: Margin.SMALL,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Margin.LARGE,
  },
  acceptButton: {
    marginLeft: Margin.XSMALL,
  },
});

JobCard.propTypes = {
  style: ViewPropTypes.style,
};

JobCard.defaultProps = {
  style: {},
};
