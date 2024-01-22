import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (user) => {
    setUser(user);

    AsyncStorage.setItem("user", JSON.stringify(user))
      .then(() => {
        setUser(user);
      })
      .catch((error) => {
        console.log("Error storing the logged user", error);
      });

    authStorage.storeToken(user.access_token);
  };
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    clearLogin();
  };
  const clearLogin = () => {
    AsyncStorage.removeItem("user")
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return { user, logIn, logOut };
};
