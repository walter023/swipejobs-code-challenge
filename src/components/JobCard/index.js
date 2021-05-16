import React, { useEffect } from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Label } from "@constants";
import { convertCentsToDollars, roundToOneDecimal } from "@helpers";
import { acceptJob, filterJobs, getJobMatches } from "@store";
import { Margin } from "@styles";
import { showToast } from "@utils";

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

  useEffect(() => {
    if (!success && message) {
      showToast(Label.OOPS, message, "error", 3500);
    }
  }, [success]);

  if (matches.length === 0) {
    dispatch(getJobMatches());
  }
  
  const onPressAccept = (jobId) => {
    dispatch(acceptJob(jobId));
    showToast(Label.GREAT, Label.ACCEPT, "success", 3500);
  };

  return matches.map((matchedJob, index) => {
    const {
      jobId,
      milesToTravel,
      requirements,
      shifts,
      wagePerHourInCents,
      jobTitle: { name: heading, imageUrl },
      company: {
        name: subHeading,
        address: { formattedAddress },
        reportTo,
      },
    } = matchedJob;

    const onTop = index === matches.length - 1;

    if (!onTop) {
      return;
    }
    const distance = roundToOneDecimal(milesToTravel);
    const wagePerHourInDolllars = convertCentsToDollars(wagePerHourInCents);

    return (
      <View style={[styles.container, style]} key={jobId}>
        <HeaderCard
          heading={heading}
          subHeading={subHeading}
          imageUrl={imageUrl}
          style={styles.header}
        />
        <HighlightLabel
          highlights={[distance, wagePerHourInDolllars]}
          style={styles.HighlightLabel}
        />
        <ShiftLabel shifts={shifts} />
        <LocationLabel distance={distance} address={formattedAddress} />
        {requirements && <RequirementLabel requirements={requirements} />}
        <ReportToLabel reportTo={reportTo} />
        <View style={styles.buttonContainer}>
          <Button
            title={Label.BUTTON_REJECT}
            onPress={() => dispatch(filterJobs({ jobId }))}
            inverted
          />
          <Button
            onPress={() => onPressAccept(jobId)}
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
