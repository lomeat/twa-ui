import React from "react";
import ReactDOM from "react-dom/client";
import { Demo } from "./Demo";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Demo />
  </React.StrictMode>
);
