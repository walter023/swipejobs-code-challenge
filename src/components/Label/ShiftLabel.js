import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewPropTypes } from "react-native";

import { Label } from "@constants";
import { monthDayHour } from "@helpers";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const ShiftLabel = ({ style, job }) => {
  const { shifts } = job;
  const { startDate, endDate } = shifts[0];

  const multipleShifts = shifts.lenght > 1;
  const shiftToDisplay = monthDayHour(startDate, endDate);

  return (
    <TouchableOpacity onPress={multipleShifts ? onPress : null} style={style}>
      <SimpleLabel
        iconLeft="calendar"
        title={Label.SHIFT_DATES}
        iconVerticalPosition="flex-end"
      >
        <Text style={styles.title}>{shiftToDisplay}</Text>
      </SimpleLabel>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
});

ShiftLabel.propTypes = {
  job: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
};

ShiftLabel.defaultProps = {
  style: {},
};
