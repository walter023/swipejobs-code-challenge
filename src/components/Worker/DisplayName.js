import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";

import { FontSize, Color } from "@styles";

export const DisplayName = ({ style }) => {
  const { profile } = useSelector((state) => state.worker);

  return (
    <Text style={[styles.display, style]}>
      {`${profile.firstName} ${profile.lastName}`}
    </Text>
  );
};

const styles = StyleSheet.create({
  display: {
    color: Color.BLACK,
    fontSize: FontSize.BODY,
  },
});

DisplayName.propTypes = {
  style: PropTypes.object,
};

DisplayName.defaultProps = {
  style: {},
};
