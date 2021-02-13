import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto' ;
    src: url('/Roboto.ttf') format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }
  html, body {
    font-family: Roboto;
  }
`
export default GlobalStyle;