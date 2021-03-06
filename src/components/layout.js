import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled from "styled-components"
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

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 2rem;
`

export default ({
  children,
  onClickFilter,
  locationSelectorProps,
  onUpdateKey,
}) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fixed(width: 650, height: 732) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container url={data.file.childImageSharp.fixed.src}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>คนละครึ่ง</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        ></link>
      </Helmet>
      <Navbar
        onClickFilter={onClickFilter}
        locationSelectorProps={locationSelectorProps}
        onUpdateKey={onUpdateKey}
      />
      <HistoryMenu />
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}
