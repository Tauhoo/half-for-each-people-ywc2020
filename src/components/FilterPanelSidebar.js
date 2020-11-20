import React from "react"
import styled from "styled-components"
import FilterPanel from "./filterPanel"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: ${({ visible }) => (visible ? "0vw" : "100vw")};
`

export default visible => (
  <Container visible={visible}>
    <FilterPanel></FilterPanel>
  </Container>
)
