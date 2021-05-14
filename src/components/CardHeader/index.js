import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { BorderRadius, FontSize, FontWeight, Margin } from "@styles";

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
      <View style={styles.infoContainer}>
        <Text style={styles.jobTitle}>{jobTitle.name}</Text>
        <Text style={styles.company}>{company.name}</Text>
      </View>
    </View>
  );
};

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
  jobTitle: {
    fontSize: FontSize.LARGE,
    fontWeight: FontWeight.BOLD,
    marginBottom: Margin.XSMALL,
  },
  company: {
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
