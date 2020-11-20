import React from "react"
import { createGlobalStyle } from "styled-components"
import HistoryMenu from "./historyMenu"
import Navbar from "./navbar"
import Wrapper from "./wrapper"

import "antd/dist/antd.less"

const GlobalStyle = createGlobalStyle`  
  body {
    margin: 0;
  } 

  * {
    box-sizing: border-box;
  } 

  @font-face {
    font-family: "IBM Plex Sans Thai";
    src: url("https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai-Regular.woff2")
        format("woff2"),
        url("https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai-Regular.woff")
        format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IBM Plex Sans Thai";
    src: url("https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai-Bold.woff2")
        format("woff2"),
        url("https://cdn.lazywasabi.net/fonts/IBMPlexSansThai/IBMPlexSansThai-Bold.woff")
        format("woff");
    font-style: normal;
    font-weight: bold;
    font-display: swap;
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
