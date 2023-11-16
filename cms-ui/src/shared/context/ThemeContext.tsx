import { createContext, useState } from 'react';
import { useLocalStorage } from 'shared/hooks/useStorage';

export type MyThemeContextType = {
  darkMode: string;
  toggleTheme: () => void;
};

const initialValue = {
  darkMode: 'Default',
  toggleTheme: () => {},
};

export const MyThemeContext = createContext<MyThemeContextType>(initialValue);

export const MyThemeContextProvider = ({ children }: any) => {
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', 'Default');
  const [darkMode, setDarkMode] = useState<string>(darkTheme);

  const toggleTheme = () => {
    setDarkTheme(darkMode === 'Default' ? 'Dark' : 'Default');
    setDarkMode(darkMode === 'Default' ? 'Dark' : 'Default');
  };

  return (
    <MyThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </MyThemeContext.Provider>
  );
};

export default MyThemeContextProvider;
