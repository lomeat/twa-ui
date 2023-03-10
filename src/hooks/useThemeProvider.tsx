import React from "react";
import { ThemeProvider as StThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../theme";

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

  return { theme, changeTheme, ThemeProvider };
}
