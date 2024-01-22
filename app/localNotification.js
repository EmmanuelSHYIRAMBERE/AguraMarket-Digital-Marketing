import React from "react";
import { Button } from "react-native";
import * as Notifications from "expo-notifications";

import Screen from "./app/assets/components/Screen";

function App() {
  const showNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
      },
      trigger: { seconds: 2 },
    });
  };

  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  );
}

export default App;
