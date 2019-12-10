import PropTypes from "prop-types"
import React from "react"
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <footer>
      <p>Site designed and developed by Ellen Macpherson using GatsbyJS. © 2019.</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
