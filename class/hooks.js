import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppButton from "./app/assets/components/AppButton";
import buttonStyles from "./app/assets/components/AppButton/styles";
import colors from "./app/config/colors";

export default function App() {
  var [count, setCount] = useState(0);

  // var [data, setData] = useState(null);

  // fetching api
  //   useEffect(()=>{
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res)=> res.json())
  //       .then((data)=> res.setData(data));

  // },[])

  // hook must be called at the top level
  // const process = () => {
  //   const [name, setName] = useState("Bap");
  // };

  //only call hooks in react function
  // function process2() {
  //   setCount(3);
  // }

  // Effect hook

  //counting every second

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  // clean up memory by running once

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  //displaying alert after count changes

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [count]);

  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>You clicked {count} times</Text>
      <AppButton
        title="Click me"
        onPress={() => setCount((count) => count + 1)}
      ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: colors.black,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
