import React from "react";
import colors from "../../config/colors";
import { StyleSheet, View } from "react-native";

function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: { width: "100%", height: 1, backgroundColor: colors.light },
});

export default ListItemSeparator;
