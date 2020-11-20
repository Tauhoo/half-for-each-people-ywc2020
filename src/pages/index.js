import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Typography, Button, Drawer } from "antd"
import FilterPanel from "../components/filterPanel"
import MerchantCard from "../components/merchantCard"
import { LeftOutlined } from "@ant-design/icons"

const { Paragraph, Title } = Typography

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

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
  height: 64px;
  padding: 0px 1rem;
`
export default () => {
  const [visibleFilter, setVisibleFilter] = useState(false)
  return (
    <>
      <Drawer
        title={
          <TitleContainer>
            <LeftOutlined
              style={{ fontSize: "1.5rem", color: "white" }}
              onClick={() => setVisibleFilter(false)}
            />
            <Title
              level={2}
              style={{
                color: "white",
                textAlign: "center",
                margin: "0px",
                fontSize: "1.5rem",
              }}
            >
              กรอกผล
            </Title>
          </TitleContainer>
        }
        headerStyle={{
          padding: "0px",
          backgroundColor: "#2B4364",
          height: "64px",
        }}
        placement="right"
        closable={false}
        visible={visibleFilter}
        width="100%"
      >
        <FilterPanel></FilterPanel>
      </Drawer>
      <Layout onClickFilter={() => setVisibleFilter(true)}>
        <Container>
          <Paragraph
            style={{
              fontSize: "1.25rem",
              marginTop: "20px",
              fontWeight: "600",
            }}
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
    </>
  )
}
