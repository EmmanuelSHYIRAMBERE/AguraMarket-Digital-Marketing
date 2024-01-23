import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import TasksScreen from "../screens/TasksScreen";
import UserProductsScreen from "../screens/UserProductsScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="AccountDetails"
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Products" component={UserProductsScreen}  />
    <Stack.Screen name="Messages" component={MessageScreen} />
    <Stack.Screen name="Tasks" component={TasksScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
