import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div id="main" className="alt">
        <section>
          <div className="inner">
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
              <p>
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <ul className="actions">
              <li>
                {previous && (
                  <Link className="button" to={previous.fields.slug} rel="prev">
                    Older {/*{previous.frontmatter.title}*/}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link className="button" to={next.fields.slug} rel="next">
                    Newer {/*{next.frontmatter.title}*/}
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
