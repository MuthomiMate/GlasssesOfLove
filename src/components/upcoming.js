import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";

const MainDiv = styled.div`
    width: 100%;
    background: #FFFFFF;

    h3 {
        text-align: center;
        line-height: 1.2;
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
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`
const FirstImage = styled.div`
    flex: 0 1 48%;
    margin: 1rem auto;

    @media screen and (max-width: 850px) {
        flex: 0 1 80%;
    }
`
// const StyledBackgroundImage = styled(BackgroundImage)`
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   background-size: auto;
//   background-repeat: no-repeat;
//   background-size: cover;
//   object-fit: contain;
// `
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
                },
                upcoming1: file(relativePath: { eq: "upcoming.jpeg" }) {
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
            const firstImage = data.upcoming1.childImageSharp.fluid;
            return (<MainDiv>
            <h3>
                Our upcoming  projects
            </h3>
            <ImagesDiv>
                <FirstImage>
                    <Img fluid={firstImage} />
                </FirstImage>
                <FirstImage>
                    <Img fluid={firstImage} />
                </FirstImage>
            </ImagesDiv>
        </MainDiv>)
        }}
        />
    )
}
export default  Upcoming;