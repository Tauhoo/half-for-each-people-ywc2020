import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Typography } from "antd"
import FilterPanel from "../components/filterPanel"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
`

const Content = styled.div``

export default () => {
  return (
    <Layout>
      <Container>
        <Paragraph
          style={{ fontSize: "1.25rem", marginTop: "20px", fontWeight: "600" }}
        >
          ผลการค้นหา ร้านค้า OTOP ทั้งหมด
        </Paragraph>
        <br />
        <br />

        <Content>
          <div
            style={{
              width: "350px",
              padding: "16px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#A0AFBF",
              boxSizing: "border-box",
              backgroundColor: "white",
            }}
          >
            <FilterPanel></FilterPanel>
          </div>
        </Content>
      </Container>
    </Layout>
  )
}
