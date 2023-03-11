import React from "react";

import * as S from "./Button.styles";
import * as T from "./Button.types";

/**
 * Button
 *
 * Configuration:
 * - align (left/center/right)
 * - iconAlign (left/right)
 * - icon
 * - isDisable state (boolean)
 * - onClick callback
 * - className for the custom css styles
 *
 * @returns JSX.Element of TWA Button
 */
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
    <Wrapper onClick={isDisable ? undefined : onClick} className={className}>
      <S.Container align={align} iconAlign={iconAlign}>
        {icon}
        {children}
      </S.Container>
    </Wrapper>
  );
}
