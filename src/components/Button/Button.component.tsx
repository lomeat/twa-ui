import React from "react";

import * as S from "./Button.styles";
import * as T from "./Button.types";

export function Button({
  children,
  onClick,
  align,
  isDisable,
  icon,
  iconAlign,
  className,
}: T.ButtonProps) {
  const Wrapper = isDisable ? S.DisableButton : S.DefaultButton;

  return (
    <Wrapper onClick={isDisable ? () => {} : onClick} className={className}>
      <S.Container align={align} iconAlign={iconAlign}>
        {icon}
        {children}
      </S.Container>
    </Wrapper>
  );
}
