import React from "react";
import { Image } from "react-native-expo-image-cache";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  Alert,
} from "react-native";

import AppText from "../assets/components/AppText";
import colors from "../config/colors";
import ContactSellerForm from "../assets/components/ContactSellerForm";
import listingsApi from "../api/listings";
import ListItem from "../assets/components/ListItem";
import Screen from "../assets/components/Screen";
import AppButton from "../assets/components/AppButton";
import useApi from "../hooks/useApi";

function ListingDetailsScreen({ route }) {
  const buyProductApi = useApi(listingsApi.purchaseProduct);

  const listing = route.params;

  const handlePurchase = async (productId) => {
    try {
      if (!productId) {
        console.error("Product ID is missing");
        return;
      }

      const result = await buyProductApi.request(productId);

      console.log("Purchase result--", result);
      if (result.ok) {
        Alert.alert("Please confirm your payment on your phone");
      } else {
        Alert.alert("Error occurred, failed to purchase this product");
      }
    } catch (error) {
      console.error("An error occurred while purchasing the product", error);
    }
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
          style={{ flex: 1 }}
        >
          <Image
            style={styles.image}
            preview={{ uri: listing.images[0].thumbnailUrl }}
            tint="light"
            uri={listing.images[0].url}
            resizeMode="stretch"
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>Rwf{listing.price}</AppText>
            <AppButton
              title="Buy now"
              onPress={() => handlePurchase(listing.id)}
            />
            <View style={styles.userContainer}>
              <ListItem
                image={require("../assets/images/123.jpg")}
                title="Emmanuel"
                subTitle="10 products"
              />
            </View>
            <ContactSellerForm product={listing} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  screen: {
    padding: 2,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
