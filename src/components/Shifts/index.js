import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, ViewPropTypes } from "react-native";

import { Caption } from "@constants";
import { monthDayHour } from "@helpers";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "../Label";

export const Shifts = ({ shifts: { params } }) =>
  params.map((item, index) => {
    const shiftToDisplay = monthDayHour(item.startDate, item.endDate);
    return (
      <SimpleLabel
        key={index}
        iconLeft="calendar"
        title={Caption.SHIFT_DATES}
        iconVerticalPosition="flex-end"
      >
        <Text style={styles.title}>{shiftToDisplay}</Text>
      </SimpleLabel>
    );
  });

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
});

Shifts.propTypes = {
  shifts: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
};

Shifts.defaultProps = {
  style: {},
};
