import PropTypes from "prop-types";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
} from "react-native";

import {  Caption } from "@constants";
import { Color, FontSize } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const LocationLabel = ({ address, distance }) => (

    <SimpleLabel
      iconLeft="location"
      iconRight="chevron-forward"
      title={Caption.LOCATION}
      iconVerticalPosition="center"
    >
      <View style={styles.addressContainer}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
          {address}
        </Text>
      </View>
      <Text style={styles.smallText}>
        {distance} miles from your search location.
      </Text>
    </SimpleLabel>
);

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.TITLE,
    color: Color.BLACK,
    width: "90%",
  },
  smallText: {
    fontSize: FontSize.SMALL,
    color: Color.BLACK,
    paddingLeft: 3,
  },
});

LocationLabel.propTypes = {
  address: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
};

LocationLabel.defaultProps = {
  style: {},
};
