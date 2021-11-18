import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        height: 100%;
        > div {
          height: 100%;
          display: flex;
        }
    }
    h1 {
      font-weight: 600;
      font-size: 36px;
      margin: 0;
    }
    html {
      height: 100%;
    }
`;

export default GlobalStyle;
