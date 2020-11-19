import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
`

export default ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
)
