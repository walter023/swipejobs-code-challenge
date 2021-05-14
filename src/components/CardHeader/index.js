import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { BorderRadius, Color } from "@styles";

export const HeaderCard = ({ style, job }) => {
  const { jobTitle, company } = job;

  return (
    <View style={style}>
      <Image
        source={{
          uri: jobTitle.imageUrl,
        }}
        style={styles.logo}
      />
      <Text>{company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
    borderRadius: BorderRadius.SMALL,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    color: Color.BLACK,
  },
});

HeaderCard.propTypes = {
  style: PropTypes.object,
};

HeaderCard.defaultProps = {
  style: {},
};
