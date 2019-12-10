import React from 'react'
import Helmet from 'react-helmet'
import '../components/layout.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function Template({data}) {
    const post = data.markdownRemark;
    console.log(post.frontmatter.date)

    const backgroundImage = {
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${post.frontmatter.cover_image})`,
        width: '100%'
    }
    const tags = post.frontmatter.tags;
    let tagStr = tags.toString();

    return (
        <section className='BlogPostPage'>
            <Nav style={{width:'80%'}} />
            <main>
                <div className="BlogPostHeader" style={backgroundImage}>
                    <h1>{post.frontmatter.title}</h1>
                </div>
                <section className='content'>
                    <p><small>Published: {post.frontmatter.date}</small>
                    <small className='tag'>Tags: {tags}</small></p>
                    <article dangerouslySetInnerHTML={{__html: post.html}}></article>
                </section>
            </main>
            <Footer />
        </section>
    )
}


export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: {eq: $path}}) {
            html
            frontmatter {
                path
                title
                date
                cover_image
                tags
                published
            }
        }
    }
`