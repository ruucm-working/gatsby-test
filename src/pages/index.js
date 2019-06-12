import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Frame } from "framer"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-columns: center;
`

const Column = styled.div`
  background: green;
  flex: 0 0 33.3%;
  max-width: 33.3%;
`

const Content = styled.div`
  background: pink;
  position: relative;
  width: 100%;
  height: 100%;
`

const IndexPage = ({ data, ...props }) => {
  console.log("data", data)
  const pages = data.allWordpressPage.edges
  return (
    <Layout>
      <SEO title={pages[0].node.title} />

      <Row>
        <Column>
          <Content>
            <h1>Hi people</h1>
          </Content>
        </Column>
        <Column>
          <Content>
            <Frame
              initial={{
                top: -100,
                opacity: 0,
              }}
              animate={{
                top: 0,
                opacity: 1,
              }}
            >
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
            </Frame>
          </Content>
        </Column>
        <Column>
          <Content>3</Content>
        </Column>
        <Column>
          <Content>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </Content>
        </Column>
      </Row>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
