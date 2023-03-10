import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.button<{ isDisable?: boolean }>`
  padding: 14px 90px;
  background: ${(props) =>
    props.isDisable
      ? props.theme.background.default
      : props.theme.background.button};
  color: ${(props) =>
    props.isDisable ? props.theme.text.default : props.theme.text.button};
  position: relative;

  font-size: 12px;
  letter-spacing: 6%;
  line-height: 14px;

  border-radius: 10px;
  border: 0;
  cursor: pointer;

  ${(props) =>
    !props.isDisable &&
    `
      :hover {
        background: ${darken(0.1, props.theme.background.button)};
      }
      
      :active {
        background: ${darken(0.2, props.theme.background.button)};
      }
    `}
`;

export const Block = styled.div`
  width: inherit;
  height: inherit;
  background: rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  left: 0;
`;
