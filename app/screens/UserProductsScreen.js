import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../assets/components/ActivityIndicator";
import AppButton from "../assets/components/AppButton";
import AppText from "../assets/components/AppText";
import Card from "../assets/components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../assets/components/Screen";
import useApi from "../hooks/useApi";
import ListItem from "../assets/components/ListItem";
import ListItemDeleteIcon from "../assets/components/ListItemDeleteIcon";
import ListItemSeparator from "../assets/ListItemSeparator";
import ListItemUpdate from "../assets/components/ListItemDeleteIcon/ListItemUpdate";

function UserProductsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getUserListings);
  const deleteListingsApi = useApi(listingsApi.deleteProduct);

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const result = await deleteListingsApi.request(productId);

      if (result.ok) {
        const res = await getListingsApi.request();
        if (res) {
          Alert.alert("Products deleted successfully");
        }
      } else {
        console.error("Error deleting product", result);
      }
    } catch (error) {
      console.error("An error occurred while deleting the product", error);
    }
  };

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the products.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={"Rwf" + item.price}
              renderRightActions={() => (
                <>
                  <ListItemDeleteIcon onPress={() => handleDelete(item.id)} />
                  <ListItemUpdate onPress={() => console.log(item)} />
                </>
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => getListingsApi.request()}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
});

export default UserProductsScreen;
