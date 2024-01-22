import React, { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("tasks.db");

function Items({ done: doneHeading, onPressItem, onDeleteItem, onEditItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, [doneHeading]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedText, setEditedText] = useState("");
  const [editedItemId, setEditedItemId] = useState(null);

  const heading = doneHeading ? "Completed" : "Tasks";

  if (items === null || items.length === 0) {
    return null;
  }

  const openEditModal = (id, value) => {
    setEditedItemId(id);
    setEditedText(value);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setEditedText("");
    setEditedItemId(null);
  };

  const saveEditedItem = () => {
    if (editedItemId !== null && editedText !== "") {
      db.transaction(
        (tx) => {
          tx.executeSql(`update items set value = ? where id = ?;`, [
            editedText,
            editedItemId,
          ]);
        },
        null,
        () => {
          closeEditModal();
          onEditItem && onEditItem(); // Notify the parent component about the edit
        }
      );
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <View
          key={id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => onPressItem && onPressItem(id)}
            style={{
              flex: 1,
              backgroundColor: done ? "#1c9963" : "#fff",
              borderColor: "#000",
              borderWidth: 1,
              padding: 8,
              marginRight: 8,
            }}
          >
            <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openEditModal(id, value)}
            style={{
              backgroundColor: "#f0ad4e",
              borderRadius: 4,
              padding: 8,
              marginRight: 8,
            }}
          >
            <Text style={{ color: "#fff" }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onDeleteItem && onDeleteItem(id)}
            style={{
              backgroundColor: "#d9534f",
              borderRadius: 4,
              padding: 8,
            }}
          >
            <Text style={{ color: "#fff" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.editModalContainer}>
          <Text>Edit Item</Text>
          <TextInput
            style={styles.editTextInput}
            onChangeText={(text) => setEditedText(text)}
            value={editedText}
          />
          <View style={styles.editModalButtons}>
            <Button title="Save" onPress={saveEditedItem} />
            <Button title="Cancel" onPress={closeEditModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

function TasksScreen() {
  const [text, setText] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
      },
      null,
      () => {
        setText(null);
        setForceUpdate((prev) => prev + 1);
      }
    );
  };

  const deleteItem = (id) => {
    db.transaction(
      (tx) => {
        tx.executeSql(`delete from items where id = ?;`, [id]);
      },
      null,
      () => setForceUpdate((prev) => prev + 1)
    );
  };

  return (
    <View style={styles.container}>

      {Platform.OS !== "web" && (
        <>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              placeholder="What do you need to do?"
              style={styles.input}
              value={text}
            />
            <TouchableOpacity onPress={() => add(text)}>
              <Text style={styles.addButton}>Add</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.listArea}>
            <Items
              done={false}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`update items set done = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  () => setForceUpdate((prev) => prev + 1)
                )
              }
              onDeleteItem={deleteItem}
            />
            <Items
              done
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  () => setForceUpdate((prev) => prev + 1)
                )
              }
              onDeleteItem={deleteItem}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  addButton: {
    backgroundColor: "#4630eb",
    borderRadius: 4,
    color: "#fff",
    height: 48,
    margin: 16,
    padding: 12,
    textAlign: "center",
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  editModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editTextInput: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    margin: 16,
    padding: 8,
    width: "80%",
  },
  editModalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default TasksScreen;
