import { createContext } from "react";
export const MyContext = createContext();

const AppProvider = ({ children }) => {

  const name = "vismaya";
  return <MyContext.Provider value={name}>{children}</MyContext.Provider>;
};

export default AppProvider;
