import React from "react"
import { graphql } from "gatsby"

import "../components/singlePost.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post">
      <div className="blog-banner white-overlay">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-10 col-sm-10 m-auto">
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          </div>
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "it")
        path
        title
      }
    }
  }
`