import React from "react";
import { Image } from "react-native-expo-image-cache";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
} from "react-native";

import AppText from "../assets/components/AppText";
import colors from "../config/colors";
import ContactSellerForm from "../assets/components/ContactSellerForm";
import ListItem from "../assets/components/ListItem";
import Screen from "../assets/components/Screen";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        style={{ flex: 1 }}
      >
        <Screen style={styles.screen}>
          <ScrollView>
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
              <View style={styles.userContainer}>
                <ListItem
                  image={require("../assets/images/123.jpg")}
                  title="Emmanuel"
                  subTitle="10 products"
                />
              </View>
              <ContactSellerForm product={listing} />
            </View>
          </ScrollView>
        </Screen>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
