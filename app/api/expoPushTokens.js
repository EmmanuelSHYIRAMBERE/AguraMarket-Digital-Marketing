import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "./client";

const register = async (pushToken) => {
  try {
    const result = await AsyncStorage.getItem("user");

    if (result !== null) {
      const user = JSON.parse(result);
      const { access_token } = user;

      const response = await client.put(
        "/users/userupdate",
        {
          expoPushToken: pushToken,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error sending expoPushToken---,", error);
    throw error;
  }
};

export default {
  register,
};
