import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";

import { Label } from "@constants";

import { Color, FontSize, FontWeight, Padding, Margin } from "@styles";

export const HighlightLabel = ({ style, highlights }) => (
  <View style={[styles.container, style]}>
    <View style={styles.leftContainer}>
      <Text style={styles.label}>{Label.DISTANCE}</Text>
      <Text style={styles.title}>{highlights[0]} miles</Text>
    </View>
    <View style={styles.rightContainer}>
      <Text style={styles.label}>{Label.RATE}</Text>
      <Text style={styles.title}>{highlights[1]}</Text>
    </View>
  </View>
);

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
  highlights: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

HighlightLabel.defaultProps = {
  style: {},
};
