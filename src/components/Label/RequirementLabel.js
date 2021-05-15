import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Label } from "@constants";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const RequirementLabel = ({ style, job }) => {
  const { requirements } = job;

  if (!requirements || requirements.lenght === 0) {
    return null;
  }

  return (
    <SimpleLabel
      iconLeft="construct-sharp"
      title={Label.REQUIREMENTS}
      iconVerticalPosition="center"
    >
      {requirements.map((requirement, index) => (
        <Text key={index} style={styles.title}>
          - {requirement}
        </Text>
      ))}
    </SimpleLabel>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
});

RequirementLabel.propTypes = {
  job: PropTypes.object.isRequired,
  style: PropTypes.object,
};

RequirementLabel.defaultProps = {
  style: {},
};
