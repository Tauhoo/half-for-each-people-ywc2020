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

export default ({ size, bordered }) => (
  <Select
    defaultValue=".c"
    size={size}
    style={{ width: "100%" }}
    bordered={bordered}
  >
    <Option value=".c">
      <OptionContainer>
        <LocationIcon style={{ marginRight: "6px" }} />
        <span>พื้นที่ใกล้ฉัน</span>
      </OptionContainer>
    </Option>
    <Option value=".com">
      <OptionContainer>
        <AllLocationIcon style={{ marginRight: "6px" }} />
        <span>สถานที่ทั้งหมด</span>
      </OptionContainer>
    </Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
)
