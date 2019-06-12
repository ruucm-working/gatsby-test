import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data, ...props }) => {
  const pins = data.allWordpressWpPin.edges

  console.log("pins", pins)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      {pins.map((pin, id) => {
        return <p>{pin.node.title}</p>
      })}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    allWordpressWpPin {
      edges {
        node {
          id
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
