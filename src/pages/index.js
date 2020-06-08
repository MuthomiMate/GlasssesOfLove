import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/background"
import StyledReason from "../components/reason"
import Upcoming from "../components/upcoming"
import Work from "../components/work"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection name="boys.jpg" />
    <StyledReason />
    <Upcoming />
    <Work />
    <Footer />
  </Layout>
)

export default IndexPage
