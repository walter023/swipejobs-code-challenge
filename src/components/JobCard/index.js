import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Margin } from "@styles";
import { Label } from "@constants";
import { acceptJob, filterJobs } from "@store";

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
  const dispatch = useDispatch();
  const { matches, message, success } = useSelector((state) => state.jobs);

  if (!success && message) {
    alert(message);
  }

  return matches.map((matchedJob, index) => {
    const {
      jobId,
      milesToTravel,
      wagePerHourInCents,
      jobTitle: { name: heading, imageUrl },
      company: { name: subHeading },
    } = matchedJob;

    const onTop = index === matches.length - 1;
    
    if (!onTop) {
      return;
    }
    return (
      <View style={[styles.container, style]} key={jobId}>
        <HeaderCard
          heading={heading}
          subHeading={subHeading}
          imageUrl={imageUrl}
          style={styles.header}
        />
        <HighlightLabel job={matchedJob} style={styles.HighlightLabel} />
        <ShiftLabel job={matchedJob} />
        <LocationLabel job={matchedJob} />
        <RequirementLabel job={matchedJob} />
        <ReportToLabel job={matchedJob} />
        <View style={styles.buttonContainer}>
          <Button
            title={Label.BUTTON_REJECT}
            onPress={() => dispatch(filterJobs({ jobId }))}
            inverted
          />
          <Button
            onPress={() => dispatch(acceptJob(jobId))}
            title={Label.BUTTON_ACCEPT}
            style={styles.acceptButton}
          />
        </View>
      </View>
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
