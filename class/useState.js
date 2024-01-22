import React, { Component } from "react";
import { Text, View } from "react-native";

// export default class App extends Component {
//   state = {
//     myState:
//       "This is a text component, created using state data. It will change or updated on clicking it.",
//   };
//   updateState = () => this.setState({ myState: "The state is updated" });
//   render() {
//     return (
//       <View>
//         <Text onPress={this.updateState}> {this.state.myState} </Text>
//       </View>
//     );

// }

export default function App() {
  const [myState, updateState] = useState("Original State");
  return (
    <View style={styles.container}>
      <Text onPress={() => updateState("New Message")}>
        The state is: {myState}
      </Text>
    </View>
  );
}
// In this example, we create a Text component with state data.
//The content of Text component will be updated by clicking on it.
//The event onPress call the setState, and it updates the state "myState" text.
