import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Multimedia from "../components/multimedia"
import StyledBackgroundSection from "../components/background"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection />
    <Multimedia />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
