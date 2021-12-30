import { PropTypes } from '@material-ui/core';
import { createContext, ReactNode, useState } from 'react';

interface IThemeContextData {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}
interface IThemeContextProviderProps {
  children: ReactNode;
}
const ThemeDefaults = {
  theme: 'primary' as PropTypes.Color,
  toggleTheme: () => {},
};
export const ThemeContext = createContext<IThemeContextData>(ThemeDefaults);
const ThemeProvider = ({ children }: IThemeContextProviderProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(ThemeDefaults.theme);
  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);
  const themeContextDynamicData = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
