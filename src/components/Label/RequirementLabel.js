import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, ViewPropTypes } from "react-native";

import { Caption } from "@constants";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const RequirementLabel = ({ style, requirements }) => (
  <SimpleLabel
    iconLeft="construct-sharp"
    title={Caption.REQUIREMENTS}
    iconVerticalPosition="center"
    style={style}
  >
    {requirements.map((requirement, index) => (
      <Text key={index} style={styles.title}>
        - {requirement}
      </Text>
    ))}
  </SimpleLabel>
);

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
});

RequirementLabel.propTypes = {
  requirements: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

RequirementLabel.defaultProps = {
  style: {},
};
