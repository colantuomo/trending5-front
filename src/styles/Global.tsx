import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    background-color: #505050;
    color: white;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-weight: 200;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
