import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Text,
  SafeAreaView,
} from "react-native";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [sum, setSum] = useState();

  let add = () => setSum(parseInt(num1) + parseInt(num2));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calculate Sum</Text>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => parseInt(setNum1(text))}
          placeholder="Enter first number"
          keyboardType="numeric"
        ></TextInput>
        <TextInput
          style={styles.input}
          onChangeText={(text) => parseInt(setNum2(text))}
          placeholder="Enter second number"
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <Text
          style={{ fontSize: 20, fontWeight: 700, color: "#000", padding: 35 }}
        >
          Result = {sum}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  text: {
    fontSize: 25,
    padding: 50,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  input: {
    width: 300,
    height: 70,
    color: "white",
    margin: 12,
    borderWidth: 4,
    padding: 20,
    backgroundColor: "grey",
    borderRadius: 20,
    margin: 2,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#0ef",
    width: 200,
    height: 100,
    borderWidth: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    padding: 30,
    textAlign: "center",
    fontWeight: "700",
  },
});
export default App;
