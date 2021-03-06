import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Typography, Drawer } from "antd"
import { LeftOutlined } from "@ant-design/icons"
import Layout from "../components/layout"
import FilterPanel from "../components/filterPanel"
import getData from "../utilis/getData"
import queryData from "../utilis/queryData"
import MerchantList from "../components/merchantList"

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

const defaultData = {
  categories: [],
  provinces: [],
  priceRange: [],
  merchants: [],
}

const defaultQueryData = {
  category: "ทั้งหมด",
  subcategory: "ทั้งหมด",
  priceLevel: -1,
  province: "ทั้งหมด",
  key: "",
}

const minMerchantNumber = 18

function useFilterPannel() {
  const [data, setData] = useState(defaultData)
  const [query, setQuery] = useState(defaultQueryData)
  const [merchantsList, setMerchantList] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [merchantNumber, setPage] = useState(0)

  useEffect(() => {
    if (!loading) return
    updateMerchantsList()
  }, [loading])

  async function updateMerchantsList() {
    const result = await queryData(query, data.merchants, subCategories)
    setMerchantList(result)
    setLoading(false)
    setPage(Math.min(minMerchantNumber, result.length))
  }

  function updateSubCategories(category) {
    const subCategoryChunk = data.categories
      .filter(({ name }) => category === name)
      .map(({ subcategories }) => subcategories)
    if (subCategoryChunk.length !== 1) return setSubCategories([])
    setSubCategories(subCategoryChunk[0])
  }

  function setCategory(category) {
    updateSubCategories(category)
    setQuery({ ...query, category, subcategory: "ทั้งหมด" })
    setLoading(true)
  }

  function setSubCategory(subcategory) {
    setQuery({ ...query, subcategory })
    setLoading(true)
  }

  function setPriceLevel(priceLevel) {
    setQuery({ ...query, priceLevel })
    setLoading(true)
  }

  function setProvince(province) {
    setQuery({ ...query, province })
    setLoading(true)
  }

  function setSearchKeyword(key) {
    if (data.categories.filter(({ name }) => name === key).length > 0) {
      updateSubCategories(key)
      setQuery({ ...query, category: key, subcategory: "ทั้งหมด", key: "" })
      setLoading(true)
      return
    }

    setQuery({ ...query, key })
    setLoading(true)
  }

  function updateData(data) {
    setData(data)
    setLoading(true)
  }
  function addPage() {
    setPage(Math.min(merchantNumber + minMerchantNumber, merchantsList.length))
  }

  return [
    merchantNumber,
    data,
    subCategories,
    merchantsList,
    query,
    loading,
    setCategory,
    setSubCategory,
    setPriceLevel,
    setProvince,
    setSearchKeyword,
    updateData,
    addPage,
  ]
}

const renderTitle = (query, data) => {
  return `ผลการค้นหา ${[
    query.category !== "ทั้งหมด" ? query.category : null,
    query.priceLevel > -1 ? data.priceRange[query.priceLevel] : null,
    query.key !== "" ? query.key : null,
  ]
    .filter(value => value !== null)
    .join(" , ")} ทั้งหมด`
}

export default () => {
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [
    merchantNumber,
    data,
    subCategories,
    merchants,
    query,
    loading,
    setCategory,
    setSubCategory,
    setPriceLevel,
    setProvince,
    setSearchKeyword,
    setData,
    addPage,
  ] = useFilterPannel()

  const fecthData = async () => {
    const result = await getData()
    if (result.status === "fail") return
    setData(result.data)
  }

  useEffect(() => {
    fecthData()
  }, [])

  const locationSelectorProps = {
    provinceList: data.provinces,
    value: query.province,
    onChange: setProvince,
  }

  const priceLevelSelectorProps = {
    priceLevelList: data.priceRange,
    onChange: setPriceLevel,
    value: query.priceLevel,
  }
  const subCategoriesOptionProps = {
    subCategoryList: subCategories,
    onChange: setSubCategory,
    value: query.subcategory,
  }

  const filterPanelProps = {
    queryData: query,
    onChangeCateglory: setCategory,
    locationSelectorProps,
    priceLevelSelectorProps,
    subCategoriesOptionProps,
  }

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
        <FilterPanel {...filterPanelProps}></FilterPanel>
      </Drawer>
      <Layout
        onClickFilter={() => setVisibleFilter(true)}
        locationSelectorProps={locationSelectorProps}
        onUpdateKey={setSearchKeyword}
      >
        <Container>
          <Paragraph
            style={{
              fontSize: "1.25rem",
              marginTop: "20px",
              marginBottom: "48px",
              fontWeight: "600",
            }}
          >
            {renderTitle(query, data)}
          </Paragraph>
          <Content>
            <FilterPanelContainer>
              <FilterPanel {...filterPanelProps}></FilterPanel>
            </FilterPanelContainer>
            <MerchantList
              onAddPage={() => addPage()}
              merchants={merchants}
              merchantNumber={merchantNumber}
              loading={loading}
            />
          </Content>
        </Container>
      </Layout>
    </>
  )
}
