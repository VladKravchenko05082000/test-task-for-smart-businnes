import React, { PropsWithChildren, createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";
import { theme } from "theme";

type ContextType = {
  theme: DefaultTheme;
};

const ThemeContext = createContext<ContextType | null>(null);

const ThemeContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const context = {
    theme: theme,
  };

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error("Theme context is not found");
  }
  return themeContext;
};

export default ThemeContextProvider;
