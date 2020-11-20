import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Typography, Button } from "antd"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
`

export default () => {
  return (
    <Layout>
      <Container>
        <Paragraph
          style={{ fontSize: "1.25rem", marginTop: "20px", fontWeight: "600" }}
        >
          ผลการค้นหา ร้านค้า OTOP ทั้งหมด
        </Paragraph>
      </Container>
    </Layout>
  )
}
