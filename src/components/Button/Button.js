import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewPropTypes,
} from "react-native";
import { BorderRadius, FontSize } from "@styles";

export const Button = ({ style, onPress, textStyle, title }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.button}
      >
        <Text style={[styles[size], textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.XSMALL,
    borderWidth: 1,
  },
  button: {
    flexDirection: "row",
    paddingBottom: 3,
  },
  font: {
    fontSize: FontSize.BODY,
  },
});
