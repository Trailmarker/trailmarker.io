import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata.title
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <div id="main">
        <section className="tiles">
          {posts.map(({ node }) => {

            const title = node.frontmatter.title || node.fields.slug
            const backgroundStyle = node.frontmatter.image ?
              { backgroundImage: `url(${node.frontmatter.image.childImageSharp.fluid.src})` } : {};

            return (
              <article key={node.fields.slug}
                style={backgroundStyle} >
                <Link
                  aria-label={title}
                  to={node.fields.slug}
                  className="link primary"
                >
                  <header className="major">
                    <h3>{title}</h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </header>
                </Link>
              </article>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
