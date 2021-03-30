import React, { createContext, useState } from "react";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({ children }) => {
  const [count, setCount] = useState(30);

  const addCount = (time) => {
    console.log(
      time
    );
    setCount(time);
  };

  const resetCount = () => setCount(30);

  return (
    <OptionsContext.Provider value={{ count, addCount, resetCount }}>
      {children}
    </OptionsContext.Provider>
  );
};