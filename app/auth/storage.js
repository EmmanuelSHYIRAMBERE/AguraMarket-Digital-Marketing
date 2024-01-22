import * as SecureStore from "expo-secure-store";
import { createContext } from "react";
const key = "authToken";

export const credentialsContext = createContext({
  user: {},
  setUser: () => {},
});

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
  } catch (error) {
    console.log("Error decoding the auth token", error);
    return null;
  }
};

const persistLoggedInUser = (loggedUser) => {
  AsyncStorage.setItem("user", JSON.stringify(loggedUser))
    .then(() => {
      console.log("loggedUser----", loggedUser);
      setUser(loggedUser);
    })
    .catch((error) => {
      console.log("Error storing the logged user", error);
    });
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  persistLoggedInUser,
  removeToken,
  storeToken,
};
