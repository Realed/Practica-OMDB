import { createGlobalStyle } from "styled-components"
import fontFamily from "../styles/fontfamily"

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  }
  * {
    font-family: ${fontFamily.main};
    box-sizing: border-box;
  }
  h1{
    font-weight: 400;
  }
`

export default GlobalStyles
