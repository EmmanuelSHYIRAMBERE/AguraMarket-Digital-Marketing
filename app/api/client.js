import { create } from "apisauce";

import authStorage from "../auth/storage";
import cache from "../utility/cache";
import settings from "../config/settings";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers.authorization = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await AsyncStorage.setItem("products", JSON.stringify(response.data));

    cache.store(url, response.data);
    return response;
  }

  const storedProducts = await AsyncStorage.getItem("products");
  const data = await cache.get(url);

  console.log("storedProducts", storedProducts);
  return data
    ? { ok: true, data }
    : storedProducts
    ? { ok: true, data: storedProducts }
    : response;
};

export default apiClient;
