import React from 'react'
import Placeholder from '../images/placeholder.png'
import './BlogPageComponent.css'


const BlogPageComponent = () => {
    return(
        <article className='BlogPreview'>
            <h2>Blog Title</h2>
            <div className='previewContent'>
                <img src={Placeholder} className='placeholderImage'/>
                <p>Dolor labore ea occaecat aliqua excepteur quis ad ipsum dolore pariatur aliqua ut. Laboris reprehenderit esse ea amet deserunt exercitation cupidatat do pariatur veniam dolore veniam adipisicing ad. Dolore nisi cupidatat labore consequat deserunt dolor sunt consequat ex.</p>
            </div>
        </article>
    )
}

export default BlogPageComponent