import PropTypes from "prop-types";
import React from "react";
import { Alert, StyleSheet, View, ViewPropTypes } from "react-native";
import { BorderRadius, Color, Margin } from "@styles";
import { useSelector } from "react-redux";

import { HeaderCard } from "../HeaderCard";

export const JobCard = ({ style }) => {
  const { matches, loading, error } = useSelector((state) => state.jobs);

  return matches.map((matchedJob, index) => {
    const onTop = index === matches.length - 1;
    return (
      onTop && (
        <View style={[styles.container, style]} key={matchedJob.jobId}>
          <HeaderCard job={matchedJob} style={styles.header} />
        </View>
      )
    );
  });
};

JobCard.propTypes = {
  style: ViewPropTypes.style,
};

JobCard.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: -Margin.MEDIUM,
  },
});
