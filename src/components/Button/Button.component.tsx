import React from "react";

import * as S from "./Button.styles";

type ButtonProps = {
  isDisable?: boolean;
  onClick: (value?: unknown) => void;
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const { children, onClick, ...rest } = props;

  return (
    <S.Wrapper onClick={props.isDisable ? () => {} : onClick} {...rest}>
      {props.isDisable && <S.Block />}
      {children}
    </S.Wrapper>
  );
}
