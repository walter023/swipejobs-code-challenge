import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Label, CardTypes } from "@constants";
import { monthDayHour } from "@helpers";
import { Color, FontSize, FontWeight, Padding } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const ShiftLabel = ({ style, job }) => {
  const { shifts } = job;
  const { startDate, endDate } = shifts[0];

  const multipleShifts = shifts.lenght > 1;
  const shiftToDisplay = monthDayHour(startDate, endDate);

  return (
    <TouchableOpacity onPress={multipleShifts ? onPress : null}>
      <SimpleLabel iconLeft="calendar" title={Label.SHIFT_DATES}>
        <Text style={styles.title}>{shiftToDisplay}</Text>
      </SimpleLabel>
    </TouchableOpacity>
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
    color: Color.BLACK,
  }
});

ShiftLabel.propTypes = {
  job: PropTypes.object.isRequired,
  style: PropTypes.object,
};

ShiftLabel.defaultProps = {
  style: {},
};
