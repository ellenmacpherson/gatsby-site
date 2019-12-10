import PropTypes from "prop-types"
import React from "react"
import Nav from './Nav'
import './layout.css'
import './Header.css'

const Header = ({ siteTitle }) => (
  <header className='hero-header'>  
    <Nav />
    <h1>Software Developer | UX Analyst | D&I Advocate</h1>
  </header>
)

export default Header
