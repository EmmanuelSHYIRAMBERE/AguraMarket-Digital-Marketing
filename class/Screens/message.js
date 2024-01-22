// import * as React from "react";
// import { FlatList, StyleSheet, View, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import ListItem from "../../app/assets/components/ListItem";
// import ListItemDeleteIcon from "../../app/assets/components/ListItemDeleteIcon";
// import ListItemSeparator from "../../app/assets/ListItemSeparator";

// const initialMessages = [
//   {
//     id: 1,
//     title: "T1",
//     description: "D1",
//     image: require("../../app/assets/images/123.jpg"),
//   },
//   {
//     id: 2,
//     title: "T2",
//     description: "D2",
//     image: require("../../app/assets/images/123.jpg"),
//   },
// ];

// function MessageScreen(props) {
//   const [messages, setMessages] = React.useState(initialMessages);
//   const [refreshing, setRefreshing] = React.useState(false);
//   const navigation = useNavigation(); // Use the useNavigation hook

//   const handleDelete = (message) => {
//     // Delete the message from messages
//     setMessages(messages.filter((m) => m.id !== message.id));
//   };

//   return (
//     <Screen>
//       <FlatList
//         data={messages}
//         keyExtractor={(message) => message.id.toString()}
//         renderItem={({ item }) => (
//           <ListItem
//             title={item.title}
//             subTitle={item.description}
//             image={item.image}
//             onPress={() => console.log("Message selected", item)}
//             renderRightActions={() => (
//               <ListItemDeleteIcon onPress={() => handleDelete(item)} />
//             )}
//           />
//         )}
//         ItemSeparatorComponent={ListItemSeparator}
//         refreshing={refreshing}
//         onRefresh={() => {
//           setMessages([
//             {
//               id: 2,
//               title: "T2",
//               description: "D2",
//               image: require("../../app/assets/images/123.jpg"),
//             },
//           ]);
//         }}
//       />

//       {/* Button to navigate to the home screen */}
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate("Welcome")}
//       />
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({});

// export default MessageScreen;
