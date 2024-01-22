import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../animations/activityLoading.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.98,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
