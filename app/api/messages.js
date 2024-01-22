import client from "./client";

const send = (message, productId) =>
  client.post("/users/sendMessage", {
    message,
    productId,
  });

export default {
  send,
};
