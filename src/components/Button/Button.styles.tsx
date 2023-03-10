import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.button`
  padding: 14px 90px;
  background: ${(props) => props.theme.background.button};
  color: ${(props) => props.theme.text.button};

  font-size: 12px;
  letter-spacing: 6%;
  line-height: 14px;

  border-radius: 10px;
  border: 0;
  cursor: pointer;

  :hover {
    background: ${(props) => darken(0.1, props.theme.background.button)};
  }

  :active {
    background: ${(props) => darken(0.2, props.theme.background.button)};
  }
`;
