import { useState } from 'react';
import { createContext } from 'react';

export const animationContext = createContext();

const AnimationProvider = ({ children }) => {
  const [isAnimation, setIsAnimation] = useState(true);
  return (
    <animationContext.Provider value={{ isAnimation, setIsAnimation }}>
      {children}
    </animationContext.Provider>
  );
};
export default AnimationProvider;
