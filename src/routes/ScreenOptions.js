import React from "react";
import { StyleSheet, View } from "react-native";

import { HeaderLogo, DisplayName } from "@components";
import { Color, Margin } from "@styles";

export const defaultOptions = {
  headerRight: () => (
    <View style={styles.right}>
      <DisplayName style={styles.user} />
    </View>
  ),
  headerTitle: (props) => <HeaderLogo style={styles.logo} />,
  headerTitleAlign: "left",
  headerTintColor: Color.BLACK,
  headerBackTitleVisible: false,
};

const styles = StyleSheet.create({
  right: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  logo: {
    marginBottom: Margin.XSMALL,
  },
  user: {
    marginRight: Margin.MEDIUM,
  },
});
