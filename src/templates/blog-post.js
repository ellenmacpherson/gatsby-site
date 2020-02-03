import React from 'react'
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
    // const tags = post.frontmatter.tags;
    // tags.forEach(tag => {
    //     tag = tag.trim()
    // })
    // console.log(tags)

    return (
        <section className='BlogPostPage'>
            <Nav style={{width:'80%'}} />
            <main>
                <div className="BlogPostHeader" style={backgroundImage}>
                    <h1>{post.frontmatter.title}</h1>
                </div>
                <section className='content'>
                    <small>Published: {post.frontmatter.date}</small>
                    {/* <ul className='tagList'>
                        {tags.map(tag => (
                            <li className key={tag}>
                            <a key={tag} href={(tag)}>
                                {tag}
                            </a>
                            </li>
                        ))}
                        </ul> */}
                    <article className='blogArticleContent' dangerouslySetInnerHTML={{__html: post.html}}></article>
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

