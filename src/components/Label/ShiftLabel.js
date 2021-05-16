import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Caption } from "@constants";
import { monthDayHour } from "@helpers";
import { Color, FontSize, Margin } from "@styles";
import { Routes } from "@constants";

import { SimpleLabel } from "./SimpleLabel";

export const ShiftLabel = ({ style, shifts }) => {
  const navigation = useNavigation();
  const { startDate, endDate } = shifts[0];
  const multipleShifts = shifts.length > 1;

  const shiftToDisplay = monthDayHour(startDate, endDate);

  const navigateTo = multipleShifts
    ? () => navigation.navigate(Routes.SHIFTSSCREEN, { params: shifts })
    : null;

  return (
    <>
      <TouchableOpacity
        onPress={navigateTo}
        style={style}
        activeOpacity={!multipleShifts && 1}
      >
        <SimpleLabel
          iconLeft="calendar"
          iconRight={multipleShifts ? "chevron-forward" : undefined}
          title={Caption.SHIFT_DATES}
          iconVerticalPosition="flex-end"
        >
          <Text style={styles.title}>{shiftToDisplay}</Text>
        </SimpleLabel>
      </TouchableOpacity>
    </>
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
  shifts: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

ShiftLabel.defaultProps = {
  style: {},
};
