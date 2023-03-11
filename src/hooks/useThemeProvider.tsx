import React from "react";
import { ThemeProvider as StThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../theme";

/**
 * Use it at root level.
 *
 * Hook provides wrapper to make possibility
 * to use dark/light theme
 * w/out using styled-components at your project.
 *
 * Theme - color schema
 *
 * changeTheme - toggle dark/light theme
 *
 * ThemeProvider - context to children components
 *
 * isDark - boolean variable for checking
 * additional behavior at your components.
 *
 * @returns - theme object, changeTheme func, ThemeProvider context, isDark boolean
 */
export function useThemeProvider() {
  const [isDark, setIsDark] = React.useState<boolean>(true);

  const theme = isDark ? darkTheme : lightTheme;

  /**
   * Change global theme to 'light' or 'dark'.\
   * With no arg it toggles light/dark (state => !state)
   *
   * @param type - light | dark
   */
  function changeTheme(type?: "light" | "dark") {
    setIsDark((state) =>
      type === "light" ? false : type === "dark" ? true : !state
    );
  }

  function ThemeProvider(props: { children: React.ReactNode }) {
    return <StThemeProvider theme={theme}>{props.children}</StThemeProvider>;
  }

  return { theme, changeTheme, ThemeProvider, isDark };
}
