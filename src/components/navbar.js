import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 60px;
`

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
`

export default () => (
  <Container>
    <Wrapper>
      <Logo></Logo>
    </Wrapper>
  </Container>
)
