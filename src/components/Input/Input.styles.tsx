import styled, { css } from "styled-components";
import { lighten } from "polished";

// Input wrapper

export const Wrapper = styled.div`
  padding: 14px;
  background: ${(props) => props.theme.background.default};
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

// Input styles

export const inputStyles = css`
  background: transparent;
  color: ${(props) => props.theme.text.default};
  border: 0;
  width: 100%;

  ::placeholder {
    color: ${(props) => props.theme.text.hint};
  }

  :focus {
    border: 0;
    outline: none;
  }
`;

export const inputDisabledStyles = css`
  ${inputStyles};

  background: ${lighten(0.1, "transparent")};
  color: ${(props) => props.theme.text.hint};
`;

export const Textarea = styled.textarea<{ isDisable?: boolean }>`
  ${(props) => (props.isDisable ? inputDisabledStyles : inputStyles)}
`;

export const Input = styled.input<{ isDisable?: boolean }>`
  ${(props) => (props.isDisable ? inputDisabledStyles : inputStyles)}
`;
