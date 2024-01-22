import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight * 1.4 : 0,
        // alignContent: "stretch",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          flex: -1,
          width: 100,
          height: 100,
          // flexBasis: 100,
          // flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          position: "absolute",
          left: 20,
          top: 20,
        }}
      />
      <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
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

// const handlePress = () => console.log("Yes tapped");

// console.log(Dimensions.get("window"));

// return (
//   <SafeAreaView style={styles.container}>
//     <View
//       style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
//     />

//     {/* <Text>Hello React Native App!</Text> */}
//     {/* <Button
//       color={"orange"}
//       title="Click me"
//       onPress={
//         () =>
//           Alert.alert("Button", "Clicked", [
//             { text: "Yes", onPress: () => console.log("Yes clicked") },
//             { text: "No", onPress: () => console.log("No clicked") },
//             { text: "Other", onPress: () => console.log("Other clicked") },
//           ])
//         // Alert.prompt("Button", "type a message", (text) =>
//         //   console.log(text)
//         // )
//       }
//     /> */}
//   </SafeAreaView>
// );
