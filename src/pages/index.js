import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  width: 100%;
`

export default () => {
  return (
    <Layout>
      <Container>Hello world!</Container>
    </Layout>
  )
}
