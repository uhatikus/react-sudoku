import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;

      #root {
        background: radial-gradient(#282c34cc, #282c34); /* background color */
        color: #ffffff; /* text color */
        display: flex;
        font-family: helvetica;
        height: 100%;
        justify-content: center;
        padding: 25px;
      }
    }
  }
`
