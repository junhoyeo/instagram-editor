import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

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
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
      "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR",
      arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }

  input,
  button,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: 0;
    }
  }
`;
