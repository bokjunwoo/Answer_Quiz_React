import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: 'ONE-Mobile-POP', "Arial", sans-serif;
    padding-top: 1em;
    white-space: pre-wrap;
    // 리액트에서 사용되는 속성 값 \n -> 엔터인식
  }
  
  ul, ol {
    list-style: none;
    padding-left: 0px;
  }

  * {
  overscroll-behavior: none !important;
  background-color: beige;
  }

  *::-webkit-scrollbar {
  display: none !important;
  }
`;
export default GlobalStyle;
