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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight * 1.4 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      />
      <View>
        <Image
          source={require("./assets/background.jpg")}
          style={{ flex: 1 }}
        />
        <View
          style={{
            width: 10,
            height: 100,
            position: "absolute",
            left: 100,
            top: 20,
          }}
        >
          <Image source={require("./assets/logo.png")} />
        </View>
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
