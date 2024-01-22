import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../assets/components/ListItem";

import Screen from "../assets/components/Screen";
import ListItemSeparator from "../assets/ListItemSeparator";
import ListItemDeleteIcon from "../assets/components/ListItemDeleteIcon";

const initialMessages = [
  {
    id: 1,
    title: "Emmanuel",
    description: "Hey! Is this item still available?",
    image: require("../assets/images/123.jpg"),
  },
  {
    id: 2,
    title: "Florien",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/images/123.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteIcon onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/images/123.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
