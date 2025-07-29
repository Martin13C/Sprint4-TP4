import { createContext, useContext } from 'react';
import { RandomJ } from '../hook/Random';

const RandomContext = createContext();

export const RandomProvider = ({ children }) => {

  const hook = RandomJ();

  return (
    <RandomContext.Provider value={hook}>
      {children}
    </RandomContext.Provider>
  );
};

export function useRandom () {
    return  useContext(RandomContext);
}