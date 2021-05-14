import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { FontSize, FontWeight, Margin } from "@styles";
import { Label } from "@constants";

export const HighlightLabel = ({ style, job }) => {
  const { milesToTravel, wagePerHourInCents } = job;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        <Text style={styles.label}>{Label.RATE}</Text>
        <Text style={styles.company}>{}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.label}>{Label.DISTANCE}</Text>
        <Text style={styles.company}>{}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  distance: {
    fontSize: FontSize.LARGE,
    fontWeight: FontWeight.BOLD,
    marginBottom: Margin.XSMALL,
  },
  rate: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.TITLE,
  },
});

HeaderCard.propTypes = {
  style: PropTypes.object,
  job: PropTypes.object.isRequired,
};

HeaderCard.defaultProps = {
  style: {},
};
