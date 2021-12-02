import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*
      Based on Josh's Custom CSS Reset:
      https://www.joshwcomeau.com/css/custom-css-reset/
    */
    * {
      margin: 0
    }
    html, body {
      height: 100%;
    }
    body {
        font-family: 'Montserrat';
        /* Add accessible line-height */
        line-height: 1.5;
        /* Improve text rendering */
        -webkit-font-smoothing: antialiased;
    }
    /* Improve media defaults */
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    /* Remove built-in form typography styles */
    input, button, textarea, select {
      font: inherit;
    }
    /* Avoid text overflows */
    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }
    /* Create a root stacking context */
    #root, #__next {
      isolation: isolate;
      height: 100%;
      display: flex;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
    h2 {
      font-size: 2.15rem;
      font-weight: 500;
    }
    h3 {
      font-size: 1.75rem;
      font-weight: 400;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 300;
    }
    h5 {
      font-size: 1.2rem;
      font-weight: 400;
    }
    nav > a {
      font-size: 1.15rem;
      font-weight: 400;
    }
`;

export default GlobalStyle;
