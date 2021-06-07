import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    color: white;
    background-color: #505050;
    font-family: "Montserrat", sans-serif;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-weight: 200;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
