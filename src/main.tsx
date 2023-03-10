import React from "react";
import ReactDOM from "react-dom/client";
import { Demo } from "./Demo";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'SF-Regular';
    font-size: 12px;
  }

  @font-face {
    font-family: "SF-Light";
    src: local("SF-Light"),
    url("./fonts/SF-Light.otf");
    font-weight: 300;
  }

  @font-face {
    font-family: "SF-Medium";
    src: local("SF-Medium"),
    url("./fonts/SF-Medium.otf");
    font-weight: 500
  }

  @font-face {
    font-family: "SF-Regular";
    src: local("SF-Regular"),
    url("./fonts/SF-Regular.otf");
    font-weight: 400;
  }

  @font-face {
    font-family: "SF-Semibold";
    src: local("SF-Semibold"),
    url("./fonts/SF-Semibold.otf");
    font-weight: 600;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Demo />
  </React.StrictMode>
);

export * from "components";
export * from "hooks";
