import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './layout.css'
import './Nav.css'
import BuyMeACoffee from "./BuyMeACoffee"

const Nav = () => (
    <nav className='navigation'>
        <div id='logo'><Link to='/'>EM</Link></div>
        <ul className='nav-list'>
            <li className='nav-items'><Link to='/'>Home</Link></li>
            <li className='nav-items'><Link to='/blog'>Blog</Link></li>
            <li className='nav-items'><BuyMeACoffee /></li>
        </ul>
    </nav>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav







