// import React from "react";
// import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
// import AppButton from "../assets/components/AppButton";

// function WelcomeScreen(props) {
//   return (
//     <ImageBackground
//       blurRadius={10}
//       style={styles.background}
//       source={require("../assets/images/background.jpg")}
//     >
//       <View style={styles.logoContainer}>
//         <Image
//           style={styles.logo}
//           source={require("../assets/images/logo-red.png")}
//         />
//         <Text style={styles.logoText}>Sell what You Don't Need</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <AppButton title="Login" onPress={() => console.log("logged in")} />
//         <AppButton title="Register" color="secondary" />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     padding: 20,
//     width: "100%",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     position: "absolute",
//     top: 70,
//   },
//   logoContainer: {
//     position: "absolute",
//     top: 10,
//     alignItems: "center",
//   },
//   logoText: {
//     top: 170,
//     fontSize: 25,
//     fontWeight: "600",
//     paddingVertical: 20,
//   },
// });

// export default WelcomeScreen;
