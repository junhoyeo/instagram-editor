import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    cursor: pointer;
    touch-action: manipulation;
    text-decoration: none;
  }

  body {
    margin: 0;
    word-break: keep-all;
    background-color: #F7F8FA;
  }

  body,
  input {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }

  input,
  button {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
