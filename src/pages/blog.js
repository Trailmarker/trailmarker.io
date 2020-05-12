import React from "react"
import { Link, graphql } from "gatsby"

// For creating new blog posts
import { withPlugin } from 'tinacms'
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark'

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
                    <small className="date">{node.frontmatter.date}</small>
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

// 2. Create the `content-creator` plugin
const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'Create post',
  fields: [
    {
      name: 'filename',
      component: 'text',
      label: 'Filename',
      placeholder: 'content/blog/hello-world/index.md',
      description:
        'The full path to the new markdown file, relative to the repository root.',
    },
  ],
  filename: form => {
    return form.filename
  },
})

// 3. Add the plugin to the component
export default withPlugin(BlogIndex, CreatePostPlugin)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } } 
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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