import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 29.6px);
  gap: 6px;
  height: 29.6px;
  margin: 16px 0px;
`

const ImageCircle = styled.div`
  width: 29.6px;
  height: 29.6px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #6cbf5f;
`

export default ({ types = [] }) => {
  const data = useStaticQuery(graphql`
    query images {
      allFile(filter: { relativeDirectory: { eq: "facilities" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 17, height: 17) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.edges
    .map(({ node }) => ({
      name: node.name,
      fixed: node.childImageSharp.fixed,
    }))
    .filter(({ name }) => types.filter(data => data === name).length > 0)

  return (
    <Container>
      {images.map(({ name, fixed }) => (
        <ImageCircle>
          <Img fixed={fixed} key={name}></Img>
        </ImageCircle>
      ))}
    </Container>
  )
}
