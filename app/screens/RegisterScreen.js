import React, { useContext, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../assets/components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../assets/components/forms";
import authApi from "../api/auth";
import credentialsContext from "./../auth/context";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../assets/components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  fullNames: Yup.string().required().label("fullNames"),
  email: Yup.string().required().email().label("Email"),
  phoneNo: Yup.string().required().min(8).label("phoneNo"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const { user, setUser } = useContext(credentialsContext);
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
        Alert.alert(result.data);
      } else {
        setError("An unexpected error occurred.");
        Alert.alert(result?.data);
      }
      return;
    }
    if (result.data.message) {
      Alert.alert(result.data?.message);
    }

    navigation.navigate("Login");
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ScrollView>
          <Image
            style={styles.logo}
            source={require("../assets/images/image/hero-banner.png")}
          />
          <AppForm
            initialValues={{
              fullNames: "",
              email: "",
              phoneNo: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="fullNames"
              placeholder="Full names"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email address"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCorrect={false}
              icon="phone"
              keyboardType="phone-pad"
              name="phoneNo"
              placeholder="Phone number"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Register" />
          </AppForm>
        </ScrollView>
      </Screen>
    </>
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

export default RegisterScreen;
