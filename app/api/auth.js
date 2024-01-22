import client from "./client";

const login = (email, password) =>
  client.post("/users/login", { email, password });

export default {
  login,
};
