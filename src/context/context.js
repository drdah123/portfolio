import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentHover, setCurrentHover] = useState('');

  const handleHoverProj = (title) => {
    if (title) {
      setCurrentHover(title);
    } else {
      setCurrentHover(null);
    }
  };
  return (
    <StateContext.Provider
      value={{ currentHover, setCurrentHover, handleHoverProj }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
