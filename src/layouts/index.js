import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { BorderRadius, Color, Margin } from "@styles";

export const DefaultLayout = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

DefaultLayout.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    borderRadius: BorderRadius.SMALL,
    flex: 1,
    margin: Margin.MEDIUM,
    zIndex: 1,
  },
});
