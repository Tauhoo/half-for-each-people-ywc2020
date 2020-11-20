import React from "react"
import styled from "styled-components"
import { Breadcrumb } from "antd"

const { Item } = Breadcrumb

const Container = styled.div`
  width: 100%;
  background-color: #283a7c;
  display: flex;
  justify-content: center;
  * {
    font-size: 14px;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 0.75rem 2rem;
  * {
    color: white !important;
  }
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
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
