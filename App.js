import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import credentialsContext from "./app/auth/context";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/assets/components/OfflineNotice";
import { navigationRef } from "./app/navigation/rootNavigation";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = () => {
    AsyncStorage.getItem("user")
      .then((result) => {
        if (result !== null) {
          setUser(JSON.parse(result));
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <credentialsContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </credentialsContext.Provider>
  );
}
