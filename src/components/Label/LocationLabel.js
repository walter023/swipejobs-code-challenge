import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Label } from "@constants";
import { roundToOneDecimal } from "@helpers";
import { Color, FontSize } from "@styles";

import { SimpleLabel } from "./SimpleLabel";

export const LocationLabel = ({ style, job }) => {
  const {
    company: {
      address: { formattedAddress },
    },
    milesToTravel,
  } = job;

  const distance = roundToOneDecimal(milesToTravel);

  return (
    <TouchableOpacity>
      <SimpleLabel
        iconLeft="location"
        iconRight="chevron-forward"
        title={Label.LOCATION}
        iconVerticalPosition="center"
      >
        <View style={styles.addressContainer}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {formattedAddress}
          </Text>
        </View>
        <Text style={styles.smallText}>
          {distance} miles from your search location.
        </Text>
      </SimpleLabel>
    </TouchableOpacity>
  );
};

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
  job: PropTypes.object.isRequired,
  style: PropTypes.object,
};

LocationLabel.defaultProps = {
  style: {},
};
