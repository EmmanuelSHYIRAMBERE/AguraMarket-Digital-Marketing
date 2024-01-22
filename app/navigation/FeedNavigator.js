import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProductDetails"
      options={{
        headerShown: false,
      }}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
