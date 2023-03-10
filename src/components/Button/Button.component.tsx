import React from "react";

import * as S from "./Button.styles";

type ButtonProps = {
  isDisable?: boolean;
  onClick: (value?: unknown) => void;
  children: React.ReactNode;
  align?: ButtonAlign;
};

type ButtonAlign = "left" | "right" | "center";

export function Button({ children, onClick, align, isDisable }: ButtonProps) {
  const Wrapper = isDisable ? S.DisableButton : S.DefaultButton;

  return (
    <Wrapper onClick={isDisable ? () => {} : onClick}>
      {isDisable && <S.Block>{children}</S.Block>}
      <S.Container align={align}>{children}</S.Container>
    </Wrapper>
  );
}
