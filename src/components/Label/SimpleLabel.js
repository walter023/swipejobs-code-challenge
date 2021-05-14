import PropTypes from "prop-types";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


import { monthDayHour } from "@helpers";
import { Color, FontSize, FontWeight, Padding, Margin } from "@styles";

export const SimpleLabel = ({
  style,
  iconLeft,
  iconRight,
  renderItems,
  textStyle,
  title,
}) => {

  return (
    <View style={[styles.container, style]}>
      <Ionicons
        name={iconLeft}
        size={30}
        color={Color.BLACK}
        style={styles.icon}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.label}>{title}</Text>
        {renderItems()}
      </View>
    </View>
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
    marginTop: Margin.SMALL,
  },
  detailContainer: {
    paddingHorizontal: Padding.XSMALL,
    flex: 1,
  },
  label: {
    fontSize: FontSize.TITLE,
    fontWeight: FontWeight.BOLD,
  },
  title: {
    fontSize: FontSize.LARGE,
  },
});

SimpleLabel.propTypes = {
  renderItems: PropTypes.func.isRequired,
  style: PropTypes.object,
};

SimpleLabel.defaultProps = {
  style: {},
};
