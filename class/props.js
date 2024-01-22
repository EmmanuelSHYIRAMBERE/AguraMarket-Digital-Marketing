import React, { Component } from "react";

import { Text, View } from "react-native";

export const Greeting = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};
export default LotsOfGreetings = () => {
  return (
    <View style={{ alignItems: "center", top: 50 }}>
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  );
};

export class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text>I am a {this.props.model}!</Text>;
  }
}
