import React, { ReactNode, createContext, useState } from 'react';

type SearchContextType = {
    query: string;
    setQuery: (query: string) => void;
  }

// Create a context with an empty default value
export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

type SearchProviderProps = {
    children: ReactNode[] | ReactNode;
  }

export const SearchProvider = ({ children } : SearchProviderProps) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};