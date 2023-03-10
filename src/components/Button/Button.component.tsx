import React from "react";

import * as S from "./Button.styles";
import { useThemeProvider } from "hooks";

type ButtonProps = {
  isDisable?: boolean;
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { changeTheme } = useThemeProvider();

  return <S.Wrapper onClick={() => changeTheme()}>{props.children}</S.Wrapper>;
}
