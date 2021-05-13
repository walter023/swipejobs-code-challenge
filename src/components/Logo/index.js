import PropTypes from "prop-types";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Margin } from "@styles";

const { width } = Dimensions.get("window");
const logoWidth = (width - Margin.MEDIUM) * 0.45;

export const HeaderLogo = ({ style }) => {
  return (
    <Image
      source={require("../../../assets/logo.png")}
      style={[styles.logo, style]}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: logoWidth,
  },
});

HeaderLogo.propTypes = {
  style: PropTypes.object,
};

HeaderLogo.defaultProps = {
  style: {},
};
