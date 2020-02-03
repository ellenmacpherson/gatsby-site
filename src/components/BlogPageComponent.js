import React from 'react'
import { Link } from 'gatsby'
import Placeholder from '../images/placeholder.png'
import './BlogPageComponent.css'


export function BlogPageComponent() {
    return(
        <article className='BlogPreview'>
            <Link to={frontmatter.path}><h2>Blog Title</h2></Link>
            <div className='previewContent'>
                <img src={Placeholder} className='placeholderImage'/>
                <p>Dolor labore ea occaecat aliqua excepteur quis ad ipsum dolore pariatur aliqua ut. Laboris reprehenderit esse ea amet deserunt exercitation cupidatat do pariatur veniam dolore veniam adipisicing ad. Dolore nisi cupidatat labore consequat deserunt dolor sunt consequat ex.</p>
            </div>
        </article>
    )
}

export default props => (
    <StaticQuery
    query = {graphql`
    query BlogPageHeaderPathQuery {
        allMarkdownRemark(limit: 10, sort:, { order: DESC, fields: [frontmatter___date] }) {
        edges {
            node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                path
            }
            }
        }
        }
    }
    `}
      render={data => <BlogPreview data={data} {...props} />}
    />
  )