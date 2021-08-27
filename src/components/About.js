import PropTypes from "prop-types"
import React from "react"
import './layout.css'
import './About.css'

const About = ({ siteTitle }) => (
    <section className='aboutSection'>
        <h2>Hey there, I'm Ellen <span role="img" aria-label="hello emoji">👋</span></h2>
        

        <p>By day, I design and engineer data-driven websites and consult on digital strategy at ThoughtWorks. By night, I teach web development.</p>
        <p><span role="img" aria-label="location pin emoji">📍</span> Melbourne, Australia</p>
        <a href="https://www.linkedin.com/in/ellen-macpherson/"><span role="img" aria-label="location pin emoji">🔗</span><p>See my career to date or get in touch.</p></a>

    </section>

)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
