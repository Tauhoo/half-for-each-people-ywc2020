import React from "react"
import styled from "styled-components"
import { Typography, Tag, Divider } from "antd"
import FacilityImage from "./facilitiesImage"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 240px 1fr;
  width: 100%;
  background-color: white;
  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: 224px 1fr;
  }
`

const ImageContainer = styled.div`
  padding: 5px;
  @media (max-width: 1023px) {
    padding: 0px;
  }
`

const DetailContainer = styled.div`
  width: 100%;
  padding: 16px;
`

const Image = styled.img`
  background-image: url(${({ url }) => url});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const DividerContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`

// const data = {
//   shopNameTH: "Wiput Shop",
//   categoryName: "แฟชั่น",
//   subcategoryName: "ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น",
//   coverImageId:
//     "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
//   facilities: ["ที่จอดรถ", "สามารถนำสัตว์เลี้ยงเข้าได้"],
//   priceLevel: 2,
//   isOpen: "N/A",
//   highlightText:
//     "Custom Keyboard By <strong>Wiput</strong>, จัดจำหน่าย Keychron ทุกรุ่น",
//   recommendedItems: ["Keychron K2", "Keychron K4"],
//   addressProvinceName: "กรุงเทพมหานคร",
//   addressDistrictName: "เขตพระนคร",
// }

const tag = {
  Y: <Tag color="rgb(27, 195, 0)">เปิด</Tag>,
  N: <Tag color="rgb(161, 161, 161)">ปิด</Tag>,
  "N/A": null,
}

const facilitiesMapper = key => {
  switch (key) {
    case "จำหน่ายเครื่องดื่มแอลกอฮอล์":
      return "alcohol"
    case "รับบัตรเครดิต":
      return "credit"
    case "บริการจัดส่งอาหาร":
      return "delivery"
    case "ดนตรีสด":
      return "music"
    case "ที่จอดรถ":
      return "park"
    case "สามารถนำสัตว์เลี้ยงเข้าได้":
      return "pet"
    case "รับจองล่วงหน้า":
      return "reserve"
    default:
      return "reserve"
  }
}

const renderRecommendItems = recommendedItems => {
  const result = []
  recommendedItems.forEach((item, index) => {
    if (index > 0) result.push(<span style={{ margin: "0px 12px" }}>|</span>)
    result.push(<span>{item}</span>)
  })
  return result
}

export default ({ data }) => {
  const {
    shopNameTH,
    subcategoryName,
    coverImageId,
    facilities,
    isOpen,
    highlightText,
    recommendedItems,
    addressProvinceName,
    addressDistrictName,
  } = data

  const detailTagDatas = [
    subcategoryName,
    addressDistrictName,
    addressProvinceName,
  ].filter(data => typeof data === "string")

  const detailTags = renderRecommendItems(detailTagDatas)

  return (
    <Container>
      <ImageContainer>
        <Image url={coverImageId}></Image>
      </ImageContainer>
      <DetailContainer>
        <Paragraph
          style={{ fontSize: "1.25rem", fontWeight: "600", margin: "0px" }}
        >
          {shopNameTH} {tag[isOpen]}
        </Paragraph>
        <Paragraph
          style={{ fontSize: "14px", color: "#999999", margin: "0px" }}
        >
          {detailTags}
        </Paragraph>
        <DividerContainer>
          <Divider style={{ margin: "18px 0px" }}></Divider>
        </DividerContainer>
        <Paragraph
          style={{
            fontSize: "14px",
            color: "#999999",
            margin: "0px 0px 8px 0px",
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: highlightText }}></span>
        </Paragraph>
        <Paragraph
          style={{
            fontSize: "14px",
            color: "#999999",
            margin: "0px",
          }}
        >
          <span style={{ fontWeight: "bolder", color: "#444444" }}>
            แนะนำ:{" "}
          </span>
          {recommendedItems.join(", ")}

          <FacilityImage
            types={facilities.map(key => facilitiesMapper(key))}
          ></FacilityImage>
        </Paragraph>
      </DetailContainer>
    </Container>
  )
}
