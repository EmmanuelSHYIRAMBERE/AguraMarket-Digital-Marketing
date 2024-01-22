const { StyleSheet } = require("react-native");
import colors from "../../../config/colors";
const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.success,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: "95%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default buttonStyles;
