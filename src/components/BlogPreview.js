import PropTypes from "prop-types"
import React from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import './BlogPreview.css'
import './layout.css'

export function BlogPreview({ data }) {
  const {edges} = data.allMarkdownRemark;

    return( 
        <div className='blogList'>
            <h2>Latest Blog Posts</h2>
            <section className='preview-container'>   
            {edges.map(edge => {
                const { frontmatter } = edge.node
                const tagList = frontmatter.tags
                let prefixEmoji = '';
                tagList.forEach(tag => {
                  console.log(tag)
                  if (tag === 'css' || tag ===  'ux') {
                    prefixEmoji = '🎨'
                  } else if (tag === 'mental health') {
                    prefixEmoji = '🧠';
                  } else if (tag === 'tutorial' || tag === 'javascript' || tag === 'python') {
                    prefixEmoji = '👩🏻‍💻'
                  } else if (tag === 'career') {
                    prefixEmoji = '💼'
                  } 
                })
            return(
                <p key={frontmatter.path}>{prefixEmoji} <Link className='linkToBlog' to={frontmatter.path}>{frontmatter.title}</Link></p>
            )
          })}
          </section>
        </div>
  
)}

BlogPreview.propTypes = {
  siteTitle: PropTypes.string,
}

BlogPreview.defaultProps = {
  siteTitle: ``,
}

export default props => (
  <StaticQuery
  query = {graphql`
  query HomePageBlogQuery {
      allMarkdownRemark(limit: 10, sort:, { order: DESC, fields: [frontmatter___date] }) {
      edges {
          node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              tags
          }
          }
      }
      }
  }
  `}
    render={data => <BlogPreview data={data} {...props} />}
  />
)

