import React from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  Platform,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Greeting } from "./class/props";

export default function addStyle() {
  const handlePress = () => console.log("Button tapped");
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "orange",
          fontSize: 18,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          fontWeight: "700",
        }}
      >
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      <Button
        onPress={handlePress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image
        source={require("./assets/OIP.jpg")}
        style={{ width: 193, height: 110, marginTop: 50 }}
      />

      <ActivityIndicator size="large" color="#00ff00" />
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
        ]}
        renderItem={({ item }) => (
          <Text style={{ color: "#0ef" }}>{item.key}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

// let pic = {
//   uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
// };

// const DATA = [
//   {
//     title: "Main dishes",
//     data: ["Pizza", "Burger", "Risotto"],
//   },
//   {
//     title: "Desserts",
//     data: ["Cheese Cake", "Ice Cream"],
//   },
// ];

{
  /* <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ color: "#000" }}>{title}</Text>
            )}
            /> */
}

// export default LotsOfGreetings = () => {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
// }

{
  /* <ActivityIndicator />
              <ActivityIndicator size="large" />
              <ActivityIndicator size="small" color="#0000ff" /> */
}
