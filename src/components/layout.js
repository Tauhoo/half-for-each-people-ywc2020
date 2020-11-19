import React from "react"
import { createGlobalStyle } from "styled-components"
import Navbar from "./navbar"
import Wrapper from "./wrapper"

const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
  } 

  * {
    box-sizing: border-box;
  } 
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <Wrapper>{children}</Wrapper>
  </>
)
