import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Color, FontSize, FontWeight, Padding, Margin } from "@styles";

export const SimpleLabel = ({
  style,
  iconLeft,
  iconRight,
  textStyle,
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
          style={styles.icon}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.label}>{title}</Text>
          {children}
        </View>
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
  icon: {
    alignSelf: "flex-end",
  },
  detailContainer: {
    paddingHorizontal: Padding.SMALL,
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
  style: PropTypes.object,
};

SimpleLabel.defaultProps = {
  style: {},
};
