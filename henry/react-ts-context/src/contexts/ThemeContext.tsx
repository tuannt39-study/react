import { PropTypes } from '@material-ui/core';
import { createContext, ReactNode, useState } from 'react';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const themeDataDefault: ThemeContextDefault = {
  theme: 'primary' as PropTypes.Color,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefault>(themeDataDefault);

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<PropTypes.Color>(themeDataDefault.theme);

  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

  const themeContextData: ThemeContextDefault = { theme, toggleTheme };

  return <ThemeContext.Provider value={themeContextData}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
