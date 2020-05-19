import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Multimedia from "../components/multimedia"
import StyledBackgroundSection from "../components/background"
import StyledReason from "../components/reason"
import Upcoming from "../components/upcoming"
import Work from "../components/work"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection />
    <StyledReason />
    <Upcoming />
    <Work />
    <Footer />
  </Layout>
)

export default IndexPage
