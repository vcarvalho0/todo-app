import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background-color: #FAFAFA;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
