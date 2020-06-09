import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const MainDiv = styled.div`
    width: 100%;
    background: #FFFFFF;
    height: 45rem;

    @media screen and (max-width: 850px) {
        height: 100rem;
    }

    h3 {
        text-align: center;
        line-height: 1.2;
        color: #00bfad;
        padding: 1em 1em 0.5em 1em;
        font-size: 2.8rem;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
    }
`

const ImagesDiv = styled.div`
    width: 90%;
    margin: auto;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 850px) {
        flex-direction: column;
        margin: .5rem auto;
    }
`
const FirstImage = styled.div`
    width: 48%;
    height: 100%;

    @media screen and (max-width: 850px) {
        margin: 1rem 0;
        width: 100%
    }
`
const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  z-index: 0;
  background-size: auto;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
`
const Upcoming = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                desktop: file(relativePath: { eq: "nothing.jpg" }) {
                    childImageSharp {
                    fluid(quality: 100, maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                }
                }
            `}
        render={data => {
            const imageData = data.desktop.childImageSharp.fluid;
            return (<MainDiv>
            <h3>
                Our upcoming  projects
            </h3>
            <ImagesDiv>
                <FirstImage>
                    <StyledBackgroundImage
                        Tag="section"
                        fluid={imageData}
                        preserveStackingContext={true}
                    />
                </FirstImage>
                <FirstImage>
                    <StyledBackgroundImage
                        Tag="section"
                        fluid={imageData}
                        preserveStackingContext={true}
                    />
                </FirstImage>
            </ImagesDiv>
        </MainDiv>)
        }}
        />
    )
}
export default  Upcoming;