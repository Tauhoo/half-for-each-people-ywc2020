import React from "react"
import styled from "styled-components"
import MerchantCard from "./merchantCard"
import Loading from "./icon/loading"
import { Button, Typography } from "antd"

const { Title, Paragraph } = Typography

const MerchantList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  width: 100%;
  height: max-content;
  justify-items: center;
`

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-top: 80px;
  height: max-content;

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
  }

  div {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
  height: max-content;
`

export default ({ merchants, merchantNumber, onAddPage, loading = false }) => {
  if (loading)
    return (
      <LoadingContainer>
        <Loading style={{ height: "65px", width: "65px" }}></Loading>
      </LoadingContainer>
    )
  if (merchants.length < 1)
    return (
      <NotFoundContainer>
        <Title>ไม่พบสถานที่ที่คุณกำลังหา</Title>
        <Paragraph>
          ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง
        </Paragraph>
      </NotFoundContainer>
    )
  return (
    <MerchantList>
      {merchants
        .map(data => (
          <MerchantCard data={data} key={data.shopNameTH}></MerchantCard>
        ))
        .slice(0, merchantNumber)}
      {merchantNumber >= merchants.length ? null : (
        <Button
          size="large"
          style={{
            marginTop: "40px",
            height: "50px",
            maxWidth: "24rem",
            width: "100%",
          }}
          onClick={onAddPage}
        >
          ดูเพิ่มเติม
        </Button>
      )}
    </MerchantList>
  )
}
