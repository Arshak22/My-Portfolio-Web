import { React, createContext, useContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [popUpOpen, setPopUpOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        popUpOpen, setPopUpOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };