import PropTypes from "prop-types";
import React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, Color } from "@styles";

export const DisplayName = ({ style }) => {
  return <Text style={[styles.display, style]}>Walter Munoz</Text>;
};

const styles = StyleSheet.create({
  display: {
    color: Color.BLACK,
    fontSize: FontSize.TITLE,
  },
});

DisplayName.propTypes = {
  style: PropTypes.object,
};

DisplayName.defaultProps = {
  style: {},
};
