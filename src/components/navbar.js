import React, { useState } from "react"
import styled from "styled-components"
import { Input, Button, AutoComplete } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import Logo from "./logo"
import MiniLogo from "./miniLogo"
import FilterIcon from "./icon/filterIcon"
import LocationSelector from "./locationSelector"
import BlueFlagIcon from "./icon/blueFlagIcon"
import FoodIcon from "./icon/foodIcon"

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
`

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 10px 0px;
  padding-right: 2rem;
  > div :last-child {
    display: none !important;
  }

  @media (max-width: 768px) {
    grid-template-columns: max-content 1fr max-content;
    align-items: center;
    padding-right: 16px;
    > div:last-child {
      display: inline-block !important;
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

const FilterIconContainer = styled.div``

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 8px;
  align-items: center;
  font-size: 14px;
`

const searchOptions = [
  {
    label: (
      <OptionContainer>
        <FoodIcon></FoodIcon>
        <span>ร้านอาหารและเครื่องดื่ม</span>
      </OptionContainer>
    ),
    value: "ร้านอาหารและเครื่องดื่ม",
  },
  {
    label: (
      <OptionContainer>
        <FoodIcon></FoodIcon>
        <span>ร้านค้า OTOP</span>
      </OptionContainer>
    ),
    value: "ร้านค้า OTOP",
  },
  {
    label: (
      <OptionContainer>
        <BlueFlagIcon></BlueFlagIcon>
        <span>ร้านธงฟ้า</span>
      </OptionContainer>
    ),
    value: "ร้านธงฟ้า",
  },
  {
    label: (
      <OptionContainer>
        <FoodIcon></FoodIcon>
        <span>สินค้าทั่วไป</span>
      </OptionContainer>
    ),
    value: "สินค้าทั่วไป",
  },
]

export default ({ onClickFilter, locationSelectorProps, onUpdateKey }) => {
  const [key, setKey] = useState("")

  const onUpdate = usingKey => {
    onUpdateKey(usingKey)
  }

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo></Logo>
          <MiniLogo></MiniLogo>
        </LogoContainer>
        <InputGroup>
          <LocationSelector
            size="large"
            bordered={false}
            {...locationSelectorProps}
          ></LocationSelector>
          <AutoComplete
            placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
            size="large"
            bordered={false}
            onChange={value => setKey(value)}
            onSelect={value => onUpdate(value)}
            value={key}
            style={{
              borderWidth: "0px 0px 0px 1px",
              borderStyle: "solid",
              borderRadius: "0px",
              borderColor: "#E2E8F0",
              overflow: "hidden",
            }}
            options={searchOptions}
          />
          <Button
            size="large"
            icon={<SearchOutlined style={{ width: "39px" }} />}
            style={{
              width: "100%",
              border: "none",
              backgroundColor: "#F8F8F8",
            }}
            onClick={() => onUpdate(key)}
          ></Button>
        </InputGroup>
        <FilterIconContainer onClick={onClickFilter}>
          <FilterIcon style={{ marginLeft: "16px" }}></FilterIcon>
        </FilterIconContainer>
      </Wrapper>
    </Container>
  )
}
