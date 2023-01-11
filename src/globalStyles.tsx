import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    --brand-100: #ffba4f;
    --brand-300: #ff8e20;
    --brand-400: #f47800;
  }

  #root{
    height: 100%;
  }
`;

export default GlobalStyle;
