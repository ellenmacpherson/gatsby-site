import React from 'react'
import '../components/layout.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function Template({data}) {
    const post = data.markdownRemark;
    console.log(post.frontmatter.date)

    // const tags = post.frontmatter.tags;
    // tags.forEach(tag => {
    //     tag = tag.trim()
    // })
    // console.log(tags)

    return (
        <section className='BlogPostPage'>
            <Nav style={{width:'95%'}} />
            <main>
                <section className='content'>
                <h2>{post.frontmatter.title}</h2>
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

