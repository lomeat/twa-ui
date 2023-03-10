import styled from "styled-components";

export const Avatar = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 100%;
  display: block;
  background: blue;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  background: ${(props) => props.theme.background.default};
  padding: 12px 16px;
  border-radius: 10px;
  gap: 10px;
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  gap: 4px;

  font-size: 12px;
  letter-spacing: 6%;
`;

export const Name = styled.span`
  font-family: "SF-Light", sans-serif;
  color: ${(props) => props.theme.text.default};
`;

export const Nickname = styled.span`
  font-family: "SF-Light", sans-serif;
  color: ${(props) => props.theme.text.hint};
`;
