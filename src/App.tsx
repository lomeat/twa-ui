import React from "react";
import styled from "styled-components";

import { useThemeProvider } from "hooks";
import { Button } from "components";

export function App() {
  const { changeTheme, ThemeProvider } = useThemeProvider();

  return (
    <ThemeProvider>
      <Wrapper>
        <Container height={600}>
          <H3>Primary default button</H3>
          <Button onClick={() => {}}>Button</Button>
          <H3>Disabled button</H3>
          <Button isDisable onClick={() => {}}>
            Button
          </Button>
          <H3>Align buttons</H3>
          <Button align="left" onClick={() => {}}>
            Button
          </Button>
          <Button align="right" onClick={() => {}}>
            Button
          </Button>
        </Container>
      </Wrapper>
      <ChangeThemeButton onClick={() => changeTheme()}>T</ChangeThemeButton>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.background.wrapper};
  padding: 40px;
  box-sizing: border-box;

  display: grid;
  gap: 20px;
`;

const Container = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: ${(props) => props.height}px;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.text.default};

  background: ${(props) => props.theme.background.wrapper};
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.text.default};
  font-family: sans-serif;
`;

const ChangeThemeButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  color: black;
  background: ${(props) => props.theme.background.button};
  border-radius: 50%;
`;
