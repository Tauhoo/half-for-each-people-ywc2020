import React from "react"
import styled from "styled-components"
import { Input, Select, Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import Logo from "./logo"
import MiniLogo from "./miniLogo"
import AllLocationIcon from "./icon/allLocation"
import LocationIcon from "./icon/location"
import FilterIcon from "./icon/filterIcon"

const { Option } = Select

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 60px;
`

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 10px 0px;
  padding-right: 2rem;
  > * :last-child {
    display: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    padding-right: 16px;
    > * :last-child {
      display: inline-block;
    }
  }
`

const InputGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 192px 1fr 62px;
  overflow: hidden;
  box-shadow: 0px 0px 0.5px 0.5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 62px;
    > * :first-child {
      display: none;
    }
  }
`

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoContainer = styled.div`
  height: 40px;
  padding: 0px 2rem;
  > div:last-child {
    display: none !important;
  }

  @media (max-width: 768px) {
    padding: 0px 1rem;
    > div:last-child {
      display: inline-block !important;
    }
    > div:first-child {
      display: none !important;
    }
  }
`

export default () => (
  <Container>
    <Wrapper>
      <LogoContainer>
        <Logo></Logo>
        <MiniLogo></MiniLogo>
      </LogoContainer>
      <InputGroup>
        <Select
          defaultValue=".com"
          size="large"
          style={{ width: "100%" }}
          bordered={false}
        >
          <Option value=".com">
            <OptionContainer>
              <AllLocationIcon style={{ marginRight: "6px" }} />
              <span>สถานที่ทั้งหมด</span>
            </OptionContainer>
          </Option>
          <Option value=".c">
            <OptionContainer>
              <LocationIcon style={{ marginRight: "6px" }} />
              <span>พื้นที่ใกล้ฉัน</span>
            </OptionContainer>
          </Option>
          <Option value=".jp">.jp</Option>
          <Option value=".cn">.cn</Option>
          <Option value=".org">.org</Option>
        </Select>
        <Input
          placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          size="large"
          bordered={false}
          style={{
            borderWidth: "0px 0px 0px 1px",
            borderStyle: "solid",
            borderRadius: "0px",
            borderColor: "#E2E8F0",
          }}
        ></Input>
        <Button
          size="large"
          icon={<SearchOutlined style={{ width: "39px" }} />}
          style={{ width: "100%", border: "none", backgroundColor: "#F8F8F8" }}
        ></Button>
      </InputGroup>
      <FilterIcon style={{ marginLeft: "16px" }}></FilterIcon>
    </Wrapper>
  </Container>
)
