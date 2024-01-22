import React from "react";
import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemUpdate({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <MaterialCommunityIcons
            size={35}
            name="pencil"
            color={colors.black}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemUpdate;
