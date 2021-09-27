import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";

import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans JP', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
