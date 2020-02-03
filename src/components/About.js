import PropTypes from "prop-types"
import React from "react"
import './layout.css'
import './About.css'

const About = ({ siteTitle }) => (
    <section className='aboutSection'>
        <h2>About Me</h2>

        <p>Hey there, I'm Ellen <span role="img" aria-label="hello emoji">👋</span></p>

        <p>I'm a data-driven frontend developer currently based in the UK. Day-to-day, I turn coffee into TV apps at BT. Outside of the 9-5, I build small apps, blogs and websites using HTML, CSS, JavaScript and React.js. My work is all about leveraging the principles of human-centered design to ensure simple, brilliant, and accessible user experiences. So if you want to build an app all the technophobes in your family will love using, let's have a chat.</p>

        <p>Outside of my IDE, I'm also hugely passionate about seeing more diversity in tech spaces. Only 4% of software developers in the UK identify as female, and I'm keen to get involved in making that a much larger number. I am currently working with BT's inclusion and recruitment D&I groups to improve hiring, retention and workplace culture.</p>
    </section>

)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
