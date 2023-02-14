import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentHover, setCurrentHover] = useState('');
  const [currentHoverChanging, setCurrentHoverChanging] = useState(false);

  const handleHoverProj = (title) => {
    if (currentHoverChanging) return;
    if (title) {
      setCurrentHover(title);
    } else {
      setCurrentHoverChanging(true);
      setCurrentHover(null);

      setTimeout(() => {
        setCurrentHoverChanging(false);
      }, 1000);
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
