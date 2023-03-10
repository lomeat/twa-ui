import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.button<{ isDisable?: boolean }>`
  padding: 16px;
  width: 100%;
  position: relative;

  font-size: 12px;
  letter-spacing: 6%;
  line-height: 14px;

  border-radius: 10px;
  border: 0;
  cursor: pointer;
`;

export const DefaultButton = styled(Wrapper)`
  background: ${(props) => props.theme.background.button};
  color: ${(props) => props.theme.text.button};

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

export const DisableButton = styled(Wrapper)`
  background: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.text.default};
`;

export const Block = styled(Wrapper)`
  background: rgba(0, 0, 0, 0.05);
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div<{ align?: "left" | "center" | "right" }>`
  width: 100%;
  text-align: ${(props) => props.align};
`;
