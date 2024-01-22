import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("AguraMarket.db");

function App(props) {
  const [items, setItems] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Create table users with id, firstname, and lastname columns
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, firstname text, lastname text);"
      );
    });

    // Load data from table users
    db.transaction((tx) => {
      tx.executeSql(
        "select * from users",
        [],
        (_, { rows }) => {
          console.log(JSON.stringify(rows._array));
          setItems(rows._array);
        },
        (txObj, error) => console.log("Error ", error)
      );
    });
  }, []);

  const handleSave = () => {
    // Insert data into the table
    db.transaction((tx) => {
      tx.executeSql(
        "insert into users (firstname, lastname) values (?, ?)",
        [firstName, lastName],
        (txObj, resultSet) => {
          console.log(resultSet.insertId);
          setFirstName("");
          setLastName("");
        },
        (txObj, error) => console.log("Error", error)
      );
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.sectionHeading}>Users</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <Button title="Save" onPress={handleSave} />

      {items.map(({ id, firstname, lastname }) => (
        <Text key={id} style={{ color: "#000" }}>
          {firstname + " " + lastname}
        </Text>
      ))}
    </View>
  );
}

const styles = {
  sectionHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    paddingRight: 8,
    width: 200,
  },
};

export default App;
