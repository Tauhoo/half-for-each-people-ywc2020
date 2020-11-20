import React from "react"
import styled from "styled-components"
import { Typography, Radio, Select, Button } from "antd"
import LocationSelector from "./locationSelector"

const { Paragraph } = Typography
const { Option } = Select

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

const SubCategoriesOption = ({ subCategoryList, onChange, value }) => {
  if (subCategoryList.length < 1) return <></>
  return (
    <>
      <Paragraph
        style={{ fontSize: "1rem", fontWeight: "600", marginTop: "2rem" }}
      >
        ประเภทร้านค้า OTOP
      </Paragraph>
      <Radio.Group
        style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      >
        <Radio value="ทั้งหมด" style={RadioStyle} key="ทั้งหมด">
          ทั้งหมด
        </Radio>
        {subCategoryList.map(name => (
          <Radio value={name} style={RadioStyle} key={name}>
            {name}
          </Radio>
        ))}
      </Radio.Group>
    </>
  )
}

const PriceLevelSelector = ({ priceLevelList, onChange, value }) => {
  return (
    <Select
      style={{ width: "100%" }}
      bordered
      placeholder="กรุณาเลือก"
      onChange={value => onChange(value)}
      value={value}
    >
      <Option value="ทั้งหมด" value={-1}>
        ทั้งหมด
      </Option>
      {priceLevelList.map((value, index) => (
        <Option value={index} key={index}>
          {value}
        </Option>
      ))}
    </Select>
  )
}

export default ({
  onChangeCateglory,
  queryData,
  locationSelectorProps,
  priceLevelSelectorProps,
  subCategoriesOptionProps,
}) => {
  return (
    <Container>
      <Paragraph style={{ fontSize: "1rem", fontWeight: "600" }}>
        ประเภทร้านค้า
      </Paragraph>
      <Radio.Group
        style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
        onChange={({ target }) => onChangeCateglory(target.value)}
        value={queryData.category}
      >
        <Radio value="ทั้งหมด" style={RadioStyle}>
          ทั้งหมด
        </Radio>
        <Radio value="ร้านอาหารและเครื่องดื่ม" style={RadioStyle}>
          ร้านอาหารและเครื่องดื่ม
        </Radio>
        <Radio value="ร้านค้า OTOP" style={RadioStyle}>
          ร้านค้า OTOP
        </Radio>
        <Radio value="ร้านธงฟ้า" style={RadioStyle}>
          ร้านธงฟ้า
        </Radio>
        <Radio value="สินค้าทั่วไป" style={RadioStyle}>
          สินค้าทั่วไป
        </Radio>
      </Radio.Group>
      <Paragraph
        style={{ fontSize: "1rem", fontWeight: "600", marginTop: "2rem" }}
      >
        จังหวัด/ใกล้ฉัน
      </Paragraph>
      <LocationSelector {...locationSelectorProps}></LocationSelector>
      <Paragraph
        style={{ fontSize: "1rem", fontWeight: "600", marginTop: "2rem" }}
      >
        ช่วงราคาสินค้า (บาท)
      </Paragraph>
      <PriceLevelSelector {...priceLevelSelectorProps}></PriceLevelSelector>
      {/* <PriceRangeContainer>
        <InputNumber
          style={{ width: "100%" }}
          placeholder="ราคาต่ำสุด"
        ></InputNumber>
        <span style={{ fontSize: "14px" }}>-</span>
        <InputNumber
          style={{ width: "100%" }}
          placeholder="ราคาต่ำสุด"
        ></InputNumber>
      </PriceRangeContainer> */}
      <Button style={{ width: "100%", marginTop: "8px" }}>ตกลง</Button>
      <SubCategoriesOption {...subCategoriesOptionProps}></SubCategoriesOption>
    </Container>
  )
}
