import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);

  return (
    <Context.Provider value={{ currentUser, setUser }}>
      {children}
    </Context.Provider>
  );
};
