import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Color, FontSize, FontWeight, Padding, Margin } from "@styles";

export const SimpleLabel = ({
  style,
  iconLeft,
  iconRight,
  iconVerticalPosition,
  title,
  children,
}) => {
  return (
    <>
      <View style={[styles.container, style]}>
        <Ionicons
          name={iconLeft}
          size={30}
          color={Color.BLACK}
          style={{ alignSelf: iconVerticalPosition }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.label}>{title}</Text>
          {children}
        </View>
        {iconRight && (
          <Ionicons
            name={iconRight}
            size={30}
            color={Color.BLACK}
            style={{ alignSelf: iconVerticalPosition }}
          />
        )}
      </View>
      <View style={styles.line} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flexDirection: "row",
    paddingHorizontal: Padding.MEDIUM,
    paddingVertical: Padding.SMALL,
  },
  detailContainer: {
    paddingHorizontal: Padding.XSMALL,
    flex: 1,
  },
  label: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.BOLD,
  },
  line: {
    backgroundColor: Color.GREY,
    marginHorizontal: Margin.MEDIUM,
    height: StyleSheet.hairlineWidth,
  },
});

SimpleLabel.propTypes = {
  children: PropTypes.node.isRequired,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  iconVerticalPosition: PropTypes.string,
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired,
};

SimpleLabel.defaultProps = {
  style: {},
};
