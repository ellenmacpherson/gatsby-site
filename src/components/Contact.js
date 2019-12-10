import PropTypes from "prop-types"
import React from "react"
import './layout.css'
import './Contact.css'

const Contact = ({ siteTitle }) => (
    <section className='contactSection'>
        <h2>Contact Me</h2>
        <p>The best way to reach me is to say g'day on <a href='https://twitter.com/ellen_dev'>Twitter</a>. If it's in regards to professional advice or a project, hit me up on my <a href="https://www.linkedin.com/in/ellen-macpherson/">LinkedIn</a>.</p>

        <p>I believe in free and affordable knowledge-sharing. Not everyone can afford degrees, courses and bootcamps, which is why I'm happy to contribute content for free on platforms like <a href='https://dev.to/ellen_dev'>Dev.to</a>, <a href='https://medium.com/@ellenmacpherson92'>Medium</a> and <a href='https://twitter.com/ellen_dev'>Twitter</a>.</p>
          
        <p>If you've enjoyed any of my frontend development or UX content, that's great! If you have the resources to do so, feel free to <a href='https://www.buymeacoffee.com/ellenmacpherson'>
          buy me coffee</a> to say thanks. My content creation goes much faster when I've got some caffiene in hand. ☕</p>
    </section>

)

Contact.propTypes = {
  siteTitle: PropTypes.string,
}

Contact.defaultProps = {
  siteTitle: ``,
}

export default Contact
