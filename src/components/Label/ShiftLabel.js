import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Label, CardTypes } from "@constants";
import { monthDayHour } from "@helpers";
import { FontSize, FontWeight, Padding } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const ShiftLabel = ({ style, job }) => {
  const { shifts } = job;

  const rederShifts = () => {
    const multipleShifts = shifts.lenght > 1;
    const { startDate, endDate } = shifts[0];

    return (
      <TouchableOpacity onPress={multipleShifts ? onPress : null}>
        <Text style={styles.title}>{monthDayHour(startDate, endDate)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SimpleLabel
      renderItems={rederShifts}
      iconLeft="calendar"
      title={Label.SHIFT_DATES}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  detailContainer: {
    paddingHorizontal: Padding.XSMALL,
    flex: 1,
  },
  label: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.BOLD,
  },
  title: {
    fontSize: FontSize.LARGE,
  },
});

ShiftLabel.propTypes = {
  job: PropTypes.object.isRequired,
  style: PropTypes.object,
};

ShiftLabel.defaultProps = {
  style: {},
};
