import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    --brand-100: #ffba4f;
    --brand-300: #ff8e20;
    --brand-400: #f47800;
  }
`;

export default GlobalStyle;
