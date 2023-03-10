import React from "react";

import * as S from "./Button.styles";

type ButtonProps = {
  isDisable?: boolean;
  onClick: (value?: unknown) => void;
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { children, onClick, ...rest } = props;

  const Wrapper = props.isDisable ? S.DisableButton : S.DefaultButton;

  return (
    <Wrapper onClick={props.isDisable ? () => {} : onClick} {...rest}>
      {props.isDisable && <S.Block>{children}</S.Block>}
      {children}
    </Wrapper>
  );
}
