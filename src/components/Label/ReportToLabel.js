import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Linking,
  Text,
  ViewPropTypes,
  TouchableOpacity,
} from "react-native";

import { Caption } from "@constants";
import { Color, FontSize, Margin } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const ReportToLabel = ({ style, reportTo }) => (
  <SimpleLabel
    iconLeft="person-circle-outline"
    title={Caption.REPORT_TO}
    iconVerticalPosition={reportTo.phone ? "center" : "flex-end"}
    style={style}
  >
    <Text style={styles.title}>{reportTo.name}</Text>
    {reportTo.phone && (
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${reportTo.phone}`)}
      >
        <Text style={styles.link}>{reportTo.phone}</Text>
      </TouchableOpacity>
    )}
  </SimpleLabel>
);

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    marginTop: Margin.XSMALL,
  },
  link: {
    fontSize: FontSize.TITLE,
    color: Color.BLUE,
    marginTop: Margin.XSMALL,
    textDecorationLine: "underline",
  },
});

ReportToLabel.propTypes = {
  reportTo: PropTypes.object.isRequired,
  style: ViewPropTypes.style,
};

ReportToLabel.defaultProps = {
  style: {},
};
