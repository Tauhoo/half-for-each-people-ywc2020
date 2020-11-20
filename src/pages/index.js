import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Typography, Button } from "antd"
import FilterPanel from "../components/filterPanel"
import MerchantCard from "../components/merchantCard"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
  padding: 0px 1rem;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const MerchantList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  width: 100%;
  justify-items: center;
`

const FilterPanelContainer = styled.div`
  width: 350px;
  padding: 16px;
  border-style: solid;
  border-width: 1px;
  border-color: #a0afbf;
  box-sizing: border-box;
  background-color: white;
  height: max-content;
  @media (max-width: 768px) {
    display: none;
  }
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
        <br />
        <br />
        <Content>
          <FilterPanelContainer>
            <FilterPanel></FilterPanel>
          </FilterPanelContainer>
          <MerchantList>
            <MerchantCard></MerchantCard>
            <MerchantCard></MerchantCard>
            <MerchantCard></MerchantCard>
            <MerchantCard></MerchantCard>
            <Button
              size="large"
              style={{
                marginTop: "40px",
                height: "50px",
                maxWidth: "24rem",
                width: "100%",
              }}
            >
              ดูเพิ่มเติม
            </Button>
          </MerchantList>
        </Content>
      </Container>
    </Layout>
  )
}
