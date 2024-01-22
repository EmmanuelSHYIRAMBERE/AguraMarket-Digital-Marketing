import client from "./client";

const register = (userInfo) => client.post("/users/signup", userInfo);

export default { register };
