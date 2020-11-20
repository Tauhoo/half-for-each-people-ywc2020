import React from "react"
import styled from "styled-components"
import { Select } from "antd"
import AllLocationIcon from "./icon/allLocation"
import LocationIcon from "./icon/location"

const { Option } = Select

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`

export default ({ size, bordered, provinceList, value, onChange }) => {
  return (
    <Select
      defaultValue="ทั้งหมด"
      size={size}
      style={{ width: "100%" }}
      bordered={bordered}
      value={value}
      onChange={value => onChange(value)}
    >
      <Option value="พื้นที่ใกล้ฉัน">
        <OptionContainer>
          <LocationIcon style={{ marginRight: "6px" }} />
          <span>พื้นที่ใกล้ฉัน</span>
        </OptionContainer>
      </Option>
      <Option value="ทั้งหมด">
        <OptionContainer>
          <AllLocationIcon style={{ marginRight: "6px" }} />
          <span>สถานที่ทั้งหมด</span>
        </OptionContainer>
      </Option>
      {provinceList.map(value => (
        <Option value={value} key={value}>
          {value}
        </Option>
      ))}
    </Select>
  )
}
