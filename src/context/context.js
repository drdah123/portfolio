import { createContext, useContext, useState } from 'react';
import App from '../App';

const StateContext = createContext();

export const ContextProvider = () => {
  const [first, setFirst] = useState('hello');
  return (
    <StateContext.Provider value={{ first }}>
      <App />
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
