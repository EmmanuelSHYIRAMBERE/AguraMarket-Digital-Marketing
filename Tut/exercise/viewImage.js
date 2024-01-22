import React from "react";
import {
  StyleSheet,
  Button,
  Platform,
  StatusBar,
  View,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Button tapped");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        height: 400,
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <Button
          onPress={handlePress}
          title="LogIn"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={handlePress}
          title="SignUp"
          color="orange"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View
        style={{
          flex: 9,
          paddingBottom: 170,
        }}
      >
        <Image
          source={require("./assets/icon.png")}
          style={{
            flex: 1,
            width: "auto",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
