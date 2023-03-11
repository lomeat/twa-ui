import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
  href?: string;
};

export function Title({ children, href }: TitleProps) {
  const a = (
    <A href={href} type="_blank">
      {children}
    </A>
  );
  const b = <Span>{children}</Span>;

  return href ? a : b;
}

const Span = styled.span`
  color: ${(props) => props.theme.text.default};
  text-transform: uppercase;
  font-family: "SF-Light", sans-serif;
`;

const A = styled.a`
  color: ${(props) => props.theme.text.link};
  text-transform: uppercase;
  font-family: "SF-Medium", sans-serif;
`;
