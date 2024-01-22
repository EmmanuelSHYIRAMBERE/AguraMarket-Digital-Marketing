import Constants from "expo-constants";
const settings = {
  dev: {
    apiUrl: "https://aguramarketapi.onrender.com/AguraMarket",
  },
  staging: {
    apiUrl: "https://aguramarketapi.onrender.com/AguraMarket",
  },
  prod: {
    apiUrl: "https://aguramarketapi.onrender.com/AguraMarket",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest2.runtimeVersion === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
