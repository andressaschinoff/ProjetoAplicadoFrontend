import React, { useState, createContext } from 'react';

export const LoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}>(null);

export const LoadingProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
