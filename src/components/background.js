import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const ImageTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    color: #eee;
    font-size: 11vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 40px;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0,0,0,0.65));
  background-repeat: no-repeat;
  background-size: cover;
  height: 52rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`
const BackgroundSection = ({name}) => {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    function handleScroll (){
      setScrollY(window.pageYOffset);
    }
      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "boys.jpg" }) {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        const setToFixed = scrollY > 150
        return (
          <StyledBackgroundImage
            setToFixed={setToFixed}
            Tag="section"
            fluid={imageData}
            preserveStackingContext={true}
          >
            <ImageTitle>Because We Care</ImageTitle>
          </StyledBackgroundImage>
        )
      }}
    />
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
`

export default StyledBackgroundSection