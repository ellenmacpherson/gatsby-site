import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import BlogPreview from "./BlogPreview"
import About from "./About"
import Contact from "./Contact"
import { graphql } from "gatsby"

const Layout = ({data}) => {

  return (
    <div className='homePage'>
      <Header />
      <main>
        <About/>
        <BlogPreview />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
