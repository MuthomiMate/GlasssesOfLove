import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/aboutbackground"
import CompanyInfo from "../components/whoweare"
import Profile from "../components/profile"
import Footer from "../components/footer"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <StyledBackgroundSection />
    <CompanyInfo />
    <Profile />
    <Footer />
  </Layout>
)

export default SecondPage