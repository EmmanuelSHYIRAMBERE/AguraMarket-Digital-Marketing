
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserProductsScreen from "../screens/UserProductsScreen";
import ProductUpdateScreen from "../screens/ProductUpdateScreen";

const Stack = createNativeStackNavigator();

const ProductNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Products"
      component={UserProductsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Product"
      options={{
        headerShown: false,
      }}
      component={ProductUpdateScreen}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
