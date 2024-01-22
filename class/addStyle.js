import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function addStyle() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#888", fontSize: 18 }}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
