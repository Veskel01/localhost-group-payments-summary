import React from "react";

interface IContext {
  inputValue: string | null;
  setInputValue: (value: string | null) => void;
}

const SearchContext = React.createContext<IContext>({
  inputValue: null,
  setInputValue: () => {},
});

const SearchProvider: React.FC = ({ children }) => {
  const [currentInputValue, setCurrentInputValue] = React.useState<string | null>(null);

  return (
    <SearchContext.Provider
      value={{ setInputValue: setCurrentInputValue, inputValue: currentInputValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchContext() {
  const { inputValue, setInputValue } = React.useContext(SearchContext);

  return {
    inputValue,
    setInputValue,
  };
}

export default SearchProvider;
