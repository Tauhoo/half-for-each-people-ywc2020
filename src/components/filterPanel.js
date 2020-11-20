import React from "react"
import styled from "styled-components"
import { Typography, Radio, InputNumber, Button } from "antd"
import LocationSelector from "./locationSelector"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
`

const RadioStyle = {
  height: "30px",
  fontSize: "14px",
}

const PriceRangeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  align-items: center;
  gap: 8px;
`

export default () => (
  <Container>
    <Paragraph style={{ fontSize: "1rem", fontWeight: "600" }}>
      ประเภทร้านค้า
    </Paragraph>
    <Radio.Group
      style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
    >
      <Radio value={1} style={RadioStyle}>
        ทั้งหมด
      </Radio>
      <Radio value={2} style={RadioStyle}>
        ร้านอาหารและเครื่องดื่ม
      </Radio>
      <Radio value={3} style={RadioStyle}>
        ร้านค้า OTOP
      </Radio>
      <Radio value={4} style={RadioStyle}>
        ร้านธงฟ้า
      </Radio>
      <Radio value={4} style={RadioStyle}>
        สินค้าทั่วไป
      </Radio>
    </Radio.Group>
    <Paragraph
      style={{ fontSize: "1rem", fontWeight: "600", marginTop: "2rem" }}
    >
      จังหวัด/ใกล้ฉัน
    </Paragraph>
    <LocationSelector></LocationSelector>
    <Paragraph
      style={{ fontSize: "1rem", fontWeight: "600", marginTop: "2rem" }}
    >
      ช่วงราคาสินค้า (บาท)
    </Paragraph>
    <PriceRangeContainer>
      <InputNumber
        style={{ width: "100%" }}
        placeholder="ราคาต่ำสุด"
      ></InputNumber>
      <span style={{ fontSize: "14px" }}>-</span>
      <InputNumber
        style={{ width: "100%" }}
        placeholder="ราคาต่ำสุด"
      ></InputNumber>
    </PriceRangeContainer>
    <Button style={{ width: "100%", marginTop: "8px" }}>ตกลง</Button>
  </Container>
)
