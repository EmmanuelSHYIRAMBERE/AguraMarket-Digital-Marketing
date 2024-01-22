import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "./client";

const endpoint = "/products/getAllProducts";
const addEndpoint = "/products/addNewProduct";
const deleteEndpoint = "/products/deleteProduct";

const getListings = () => client.get(endpoint);

const deleteProduct = async (id) => {
  const result = await AsyncStorage.getItem("user");

  if (result !== null) {
    const user = JSON.parse(result);
    const { access_token } = user;

    return client.delete(`${deleteEndpoint}/${id}`, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
};

export const addListing = async (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  const result = await AsyncStorage.getItem("user");

  if (result !== null) {
    const user = JSON.parse(result);
    const { access_token } = user;
    return client.post(addEndpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    });
  }
};

export default {
  addListing,
  deleteProduct,
  getListings,
};
