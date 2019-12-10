import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import BlogPreview from "./BlogPreview"
import About from "./About"
import Contact from "./Contact"
import { graphql } from "gatsby"

const Layout = ({data}) => {


  return (
    <div className='homePage'>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Personal website and blog of Ellen Macpherson, software developer at BT." />
        <title>Ellen Macpherson | Software Developer</title>
        <html lang='en'></html>
      </Helmet>
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
