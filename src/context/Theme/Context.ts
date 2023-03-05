import { createContext, useContext } from "react";

export enum Theme {
  Ligth = 'light',
  Dark = 'dark',
}
const initialState = {
  theme: Theme.Ligth,
  onChangeTheme: (value: Theme) => {},
};
export const ThemeContext = createContext(initialState);
export const useThemeContext = () => useContext(ThemeContext);