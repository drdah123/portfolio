import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [first, setFirst] = useState('hello');
  return (
    <StateContext.Provider value={{ first }}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
