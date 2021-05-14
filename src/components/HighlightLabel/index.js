import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Label } from "@constants";
import { roundToOneDecimal, convertCentsToDollars } from "@helpers";
import { Color, FontSize, FontWeight, Padding, Margin } from "@styles";

export const HighlightLabel = ({ style, job }) => {
  const { milesToTravel, wagePerHourInCents } = job;

  const distance = roundToOneDecimal(milesToTravel);
  const wagePerHourInDolllars = convertCentsToDollars(wagePerHourInCents);
  
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        <Text style={styles.label}>{Label.DISTANCE}</Text>
        <Text style={styles.title}>{distance} miles</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.label}>{Label.RATE}</Text>
        <Text style={styles.title}>{wagePerHourInDolllars}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.TURQUOISE,
    flexDirection: "row",
    paddingHorizontal: Padding.MEDIUM,
    paddingVertical: Padding.SMALL,
  },
  leftContainer: {
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
    flex: 1,
  },
  label: {
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.BOLD,
    marginBottom: Margin.XSMALL,
  },
  title: {
    fontSize: FontSize.XLARGE,
    fontWeight: FontWeight.BOLD,
    color: Color.WHITE,
  },
});

HighlightLabel.propTypes = {
  job: PropTypes.object.isRequired,
  style: PropTypes.object,
};

HighlightLabel.defaultProps = {
  style: {},
};
