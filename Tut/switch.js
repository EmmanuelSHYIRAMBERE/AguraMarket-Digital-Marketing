import React, { useState } from "react";

import Screen from "./app/assets/components/Screen";
import { Switch } from "react-native";

function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

export default App;
