import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, ViewPropTypes } from "react-native";

import { Label } from "@constants";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const ReportToLabel = ({ style, reportTo }) => (
  <SimpleLabel
    iconLeft="person-circle-outline"
    title={Label.REPORT_TO}
    iconVerticalPosition="flex-end"
    style={style}
  >
    {reportTo.name && <Text style={styles.title}>{reportTo.name}</Text>}
    {reportTo.phone && <Text style={styles.title}>{reportTo.phone}</Text>}
  </SimpleLabel>
);

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
});

ReportToLabel.propTypes = {
  reportTo: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
};

ReportToLabel.defaultProps = {
  style: {},
};
