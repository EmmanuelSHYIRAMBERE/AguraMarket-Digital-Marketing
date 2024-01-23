import React, { useContext, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../assets/components/forms";
import authApi from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import credentialsContext from "./../auth/context";
import Screen from "../assets/components/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const { user, setUser } = useContext(credentialsContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      if (result.data.message) {
        Alert.alert(result.data?.message);
      }
      return setLoginFailed(true);
    }

    setLoginFailed(false);

    const loggedUser = result.data;

    persistLoggedInUser(loggedUser);
    if (loggedUser.message) {
      Alert.alert(loggedUser?.message);
    }
  };

  const persistLoggedInUser = (loggedUser) => {
    AsyncStorage.setItem("user", JSON.stringify(loggedUser))
      .then(() => {
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("Error storing the logged user", error);
      });
  };
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={require("../assets/images/image/hero-banner.png")}
        />

        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ErrorMessage
            error="Invalid emailand/or password."
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
