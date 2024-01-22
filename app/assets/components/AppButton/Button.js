import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import buttonStyles from "./styles";
import colors from "../../../config/colors";

function AppButton({ title, onPress, color = "success" }) {
  return (
    <TouchableOpacity
      style={[buttonStyles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
