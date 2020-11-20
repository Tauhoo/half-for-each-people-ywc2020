import React from "react"
import styled from "styled-components"
import { Breadcrumb } from "antd"
import Wrapper from "./wrapper"

const { Item } = Breadcrumb

const Container = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  padding: 0.75rem 2rem;
  background-color: #283a7c;
  * {
    color: white !important;
  }
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`

export default () => (
  <Container>
    <Wrapper>
      <Content>
        <Breadcrumb>
          <Item>
            <span style={{ textDecoration: "underline" }}>หน้าแรก</span>
          </Item>
          <Item>ค้นหา</Item>
        </Breadcrumb>
      </Content>
    </Wrapper>
  </Container>
)
