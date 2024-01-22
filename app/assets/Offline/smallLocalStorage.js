import AsyncStorage from "@react-native-async-storage/async-storage";

_storeData = async () => {
  try {
    const itemSetData = await AsyncStorage.setItem(
      "@MySuperStore:key",
      "I like to save it."
    );
    console.log("res:----", itemSetData);
  } catch (error) {
    console.log("err>-------<", error);
    // Error saving data
  }
};

_displayData = async () => {
  try {
    const value = await AsyncStorage.getItem("TASKS");
    if (value !== null) {
      // We have data!!
      console.log("value'''''''''''':", value);
    }
  } catch (error) {
    console.log("err>-------<", error);
    // Error saving data
  }
};
// _retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem("TASKS");
//     if (value !== null) {
//       // We have data!!
//       console.log("value'''''''''''':", value);
//     }
//   } catch (error) {
//     console.log("err>-------<", error);
//     // Error saving data
//   }
// };

// _removeData = async () => {
//   try {
//     const value = await AsyncStorage.removeItem("TASKS");
//     if (value !== null) {
//       // We have data!!
//       console.log("value'''''''''''':", value);
//     }
//   } catch (error) {
//     console.log("err>-------<", error);
//     // Error saving data
//   }
// };
