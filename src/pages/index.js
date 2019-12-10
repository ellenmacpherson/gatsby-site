import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Ellen Macpherson | Software Developer</title>
      <meta name="description" content="Personal website and blog of Ellen Macpherson, software developer at BT." />
    </Helmet>
    <SEO title="Ellen Macpherson | Software Developer" />
  </Layout>
)

export default IndexPage
