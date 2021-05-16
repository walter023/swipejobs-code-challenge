import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";

import { BorderRadius, FontSize, Padding, Color } from "@styles";

const { width } = Dimensions.get("window");
const buttonWidth = width / 2 - (Padding.MEDIUM + Padding.XSMALL) * 2;

export const Button = ({ style, title, inverted, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    style={[
      styles.button,
      styles.container,
      style,
      inverted && styles.containerInverted,
    ]}
  >
    <Text style={[styles.buttonText, inverted && styles.buttonTextInverted]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XSMALL,
    width: buttonWidth,
    borderWidth: 0.5,
    alignItems: "center",
    padding: Padding.SMALL,
    backgroundColor: Color.BLACK,
  },
  containerInverted: {
    borderRadius: BorderRadius.XSMALL,
    width: buttonWidth,
    borderWidth: 0.5,
    alignItems: "center",
    backgroundColor: Color.WHITE,
  },
  buttonText: {
    fontSize: FontSize.BODY,
    color: Color.WHITE,
  },
  buttonTextInverted: {
    fontSize: FontSize.BODY,
    color: Color.BLACK,
  },
});

Button.propTypes = {
  inverted: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  onPress: () => null,
  inverted: false,
  style: {},
};
