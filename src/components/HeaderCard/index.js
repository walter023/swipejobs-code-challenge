import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View, ViewPropTypes } from "react-native";

import { BorderRadius, FontSize, FontWeight, Margin } from "@styles";

export const HeaderCard = ({ style, headline, subHeadline, imageUrl }) => (
  <View style={style}>
    <Image
      source={{
        uri: imageUrl,
      }}
      style={styles.logo}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.heading}>{headline}</Text>
      <Text style={styles.subHeading}>{subHeadline}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    borderRadius: BorderRadius.SMALL,
    height: 150,
    resizeMode: "contain",
    width: "100%",
  },
  infoContainer: {
    marginHorizontal: Margin.SMALL,
  },
  heading: {
    fontSize: FontSize.LARGE,
    fontWeight: FontWeight.BOLD,
    marginBottom: Margin.XSMALL,
  },
  subHeading: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.TITLE,
  },
});

HeaderCard.propTypes = {
  headline: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  subHeadline: PropTypes.string.isRequired,
};

HeaderCard.defaultProps = {
  style: {},
};
