import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addPushTokenListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "You need to enable permissions in order to receive notifications"
        );
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync({
        projectId: "6b568b55-4908-4536-8b00-963a2382c682",
      });
      await expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
