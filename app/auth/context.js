import { createContext } from "react";

const credentialsContext = createContext({
  user: {},
  setUser: () => {},
});

export default credentialsContext;
