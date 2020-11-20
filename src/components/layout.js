import React from "react"
import { createGlobalStyle } from "styled-components"
import HistoryMenu from "./historyMenu"
import Navbar from "./navbar"
import Wrapper from "./wrapper"

const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
  } 

  * {
    box-sizing: border-box;
    font-family: "IBM Plex Sans";
  } 
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <HistoryMenu />
    <Wrapper>{children}</Wrapper>
  </>
)
