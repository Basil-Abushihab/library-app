import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  const [booksData,setBooks]=useState(null)

  return (
    <Context.Provider value={{ currentUser, setUser,booksData,setBooks }}>
      {children}
    </Context.Provider>
  );
};
