import React from "react";

import colors from "../config/colors";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../assets/components/Icon";
import ListItem from "../assets/components/ListItem";
import ListItemSeparator from "../assets/ListItemSeparator";
import Screen from "../assets/components/Screen";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Products",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    targetScreen: "Products",
  },
  {
    title: "My messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: "Messages",
  },
  {
    title: "My tasks",
    icon: { name: "note-text-outline", backgroundColor: colors.medium },
    targetScreen: "Tasks",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {user ? (
          <ListItem
            title={user.user.fullNames}
            subTitle={user.user.email}
            image={require("../assets/images/123.jpg")}
          />
        ) : (
          navigation.navigate("Login")
        )}
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
