import { createContext, useContext } from "react";

export type SearchWordContextType = {
  filter: string;
  setFilter: (filter: string) => void;
};

export const SearchWordContext = createContext<SearchWordContextType>({
  filter: "",
  setFilter: (filter) => console.warn("no filter provider" + filter),
});

export const useSearchWord = () => {
  const context = useContext(SearchWordContext);
  if (!context) {
    throw new Error(`useSearchWord must be used within a CountProvider`);
  }
  return context;
};
