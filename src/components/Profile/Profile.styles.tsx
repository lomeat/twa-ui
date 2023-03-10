import styled from "styled-components";
import { lighten, darken } from "polished";

export const Avatar = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 100%;
  display: block;
  background: blue;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;

  background: ${(props) => props.theme.background.default};
  padding: 12px 16px;
  border-radius: 10px;
  transition: 0.1s background;
`;

export const WrapperClickable = styled(Wrapper)`
  :hover {
    background: ${(props) => lighten(0.05, props.theme.background.default)};
  }

  :active {
    background: ${(props) => darken(0.05, props.theme.background.default)};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 12px;
  letter-spacing: 6%;
  cursor: pointer;
`;

export const Name = styled.span`
  font-family: "SF-Light", sans-serif;
  color: ${(props) => props.theme.text.default};
`;

export const Nickname = styled.span`
  font-family: "SF-Light", sans-serif;
  color: ${(props) => props.theme.text.hint};
`;
