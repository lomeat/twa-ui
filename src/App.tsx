import React from "react";
import styled from "styled-components";

import { useThemeProvider } from "hooks";
import { Button } from "components";

export function App() {
  const { changeTheme, ThemeProvider } = useThemeProvider();

  return (
    <ThemeProvider>
      <Wrapper>
        <Button>Button</Button>
        <Button>Button</Button>
      </Wrapper>
      <ChangeThemeButton onClick={() => changeTheme()}>T</ChangeThemeButton>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  margin: 100px auto;
  padding: 20px;
  gap: 20px;
  border-radius: 6px;

  background: ${(props) => props.theme.background.wrapper};
`;

const ChangeThemeButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  color: black;
  background: ${(props) => props.theme.background.button}
  border-radius: 50%;
`;
