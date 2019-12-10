import React from 'react'
import { Link } from "gatsby"
import Nav from '../components/Nav'
import './Blog.css'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import Placeholder from '../images/placeholder.png'

const Blog = ({data}) => {
    const style = {
        width: '80%',
        margin: '0 auto'
    }

    const {edges} = data.allMarkdownRemark;
    return( 
        <div className='blogList'>
            <Nav style={style}/>
            {edges.map(edge => {
                const excerpt = edge.node.excerpt;
                const { frontmatter } = edge.node
                return(
                    <article className='BlogPreview'>
                    <h2>{frontmatter.title}</h2>
                    <div className='previewContent'>
                        <p>{excerpt}<Link to={frontmatter.path} className='readMoreLink'> Read More</Link></p>
                    </div>
                    </article>
            )
        })}
        <Footer />
        </div>
        
    
    )}

export const query =graphql`
    query BlogPageQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
            node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                cover_image
            }
            }
        }
        }
    }
    `

export default Blog