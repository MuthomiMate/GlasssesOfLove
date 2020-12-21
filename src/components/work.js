import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseImages } from "./images"

const MainDIv = styled.div`
    background: #EDEFF1;
    width: 100%;
    margin-top: 5rem;

    h3 {
        text-align: center;
        line-height: 1.2;
        font-size: 2.8em;
        padding: 1em 1em 0.5em 1em;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    justify-content: space-between;
`

const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-top: none;
    border: 1px solid #d1d3d1;
`

const ImageBackground = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #121B22;
    transition: all 0.5s;
    color: #FFFFFF;
    z-index: 9;
    opacity: 0.8;

    ${ImageDiv}:hover & {
        display: flex;
    }
`
const Card = styled.div`
    flex: 0 1 32%;
    margin: 1rem auto;

    @media screen and (max-width: 870px) {
        flex: 0 1 48%;
    }

    @media screen and (max-width: 500px) {
        flex: 0 1 90%;
    }
`
const Description = styled.div`
    h3 {
        text-align: start;
        font-size: 2em;
        padding: 0;
        margin-bottom: .3em;
        margin: 0;
        font-weight: bold;
        font-style: normal;
        color: #454444;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
        text-transform: capitalize;
    }
    div {
        margin: 0 1rem;
    }
    h2 {
        color: #adbcbb;
        margin-bottom: .3em;
        font-size: 20.8px;
        font-weight: 400;
    }
    p {
        color: #393939;
        padding-bottom: .3rem
    }
    button {
        background-color: #00bfad;
        text-align: center;
        border: none;
        outline: none;
        border-color: #fff;
        font-size: 18px;
        font-weight: bold;
        border-radius: 3rem;
        padding: .9rem 2.5rem .9rem 2rem;
    }
`
const Button = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
`


const Work = () => {
    const { workFirstImage, workSecondImage, workThirdImage } = UseImages()
    return (
        <MainDIv>
            <h3>
            Latest projects
            </h3>
            <Cards>
                <Card>
                    <ImageDiv>
                        <div style={{position: "relative"}}>
                            <ImageBackground>
                                <StyledLink to="/coming-soon">
                                    VIEW ALL PHOTOS
                                </StyledLink>
                            </ImageBackground>
                            <Img fluid={workFirstImage.childImageSharp.fluid} />
                        </div>
                    <Description>
                        <div>
                            <h3>GOL Gala Dinner</h3>
                            <h2> February 29, 2020</h2>
                        </div>
                    </Description>
                </ImageDiv>
                </Card>
                <Card>
                    <ImageDiv>
                        <div style={{position: "relative"}}>
                            <ImageBackground>
                                <StyledLink to="/coming-soon">
                                    VIEW ALL PHOTOS
                                </StyledLink>
                            </ImageBackground>
                            <Img fluid={workSecondImage.childImageSharp.fluid} />
                        </div>
                        <Description>
                            <div>
                                <h3>Imani Children’s Home (Soweto, Kayole)</h3>
                                <h2>December 15, 2019</h2>
                            </div>
                        </Description>
                    </ImageDiv>
                </Card>
                <Card>
                    <ImageDiv>
                        <div style={{position: "relative"}}>
                            <ImageBackground>
                                <StyledLink to="/coming-soon">
                                    VIEW ALL PHOTOS
                                </StyledLink>
                            </ImageBackground>
                            <Img fluid={workThirdImage.childImageSharp.fluid} />
                        </div>
                        <Description>
                            <div>
                                <h3>Berur and Neema Annex Children Homes</h3>
                                <h2>October 18-20, 2019</h2>
                            </div>
                        </Description>
                    </ImageDiv>
                </Card>
            </Cards>
        </MainDIv>
    )
}

export default Work;