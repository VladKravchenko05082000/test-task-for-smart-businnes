import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family:${({ theme }) => theme.fonts.spaceMono};
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    overflow-y: scroll !important;
    overscroll-behavior-y: none ;
    background-color:${({ theme }) => theme.colors.white};
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
  }
  
  ol,
  ul {
    list-style: none;
    list-style-position: inside;
  }

  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  [role="button"] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 15000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.textMain} !important;
  }

  input:focus-visible {
    outline: none;
  }

  input {
    border-style: solid;
  }

  #root {
    height: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
