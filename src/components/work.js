import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseImages } from "./images"

const MainDIv = styled.div`
    background: #EDEFF1;
    height: 47rem;
    width: 100%;
    margin-top: 5rem;

    @media screen and (max-width: 976px) {
        height: 48rem;
    }

    @media screen and (max-width: 797px) {
        height: 52rem;
    }
    @media screen and (max-width: 697px) {
        height: 85rem;
    }
    @media screen and (max-width: 550px) {
        height: 115rem;
    }
    @media screen and (max-width: 490px) {
        height: 120rem;
    }
    @media screen and (max-width: 357px) {
        height: 130rem;
    }

    h3 {
        text-align: center;
        line-height: 1.2;
        color: #00bfad;
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
    flex-grow: 1;
    margin: 0 .5rem;
    width: 30%;
    height: 90%;
    @media screen and (max-width: 696px) {
        margin-top: 1rem;
        width: 40%;
    }

    @media screen and (max-width: 550px) {
        margin-top: 1rem;
        width: 100%;
    }

    Img {
        height: 51.5%;
    }

    ImageBackground {
        position: absolute;
        text-align: center;
        width: 100%;
        height: 51.5%;
        opacity: 0;
        z-index: 11;
        transition: all 0.5s;
        background: rgba(0, 0, 0, 0.6);
    }
`
const Description = styled.div`
    border-top: none;
    border: 1px solid #d1d3d1;
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
                        <ImageBackground>
                            <StyledLink to="/coming-soon">
                                VIEW ALL PHOTOS
                            </StyledLink>
                        </ImageBackground>
                        <Img fluid={workFirstImage.childImageSharp.fluid} />
                    </ImageDiv>
                    <Description>
                        <div>
                            <h3>Nairobi street feeding</h3>
                            <h2> January 12, 2019</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit.</p>
                            <Button>
                                <StyledLink to="/coming-soon">
                                    <button>View  all pictures</button>
                                </StyledLink>
                            </Button>
                        </div>
                    </Description>
                </Card>
                <Card>
                    <ImageDiv>
                        <ImageBackground>
                            <StyledLink to="/coming-soon">
                                VIEW ALL PHOTOS
                            </StyledLink>
                        </ImageBackground>
                        <Img fluid={workSecondImage.childImageSharp.fluid} />
                    </ImageDiv>
                    <Description>
                        <div>
                            <h3>Nairobi street feeding</h3>
                            <h2> January 12, 2019</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit.</p>
                            <Button>
                                <StyledLink to="/coming-soon">
                                    <button>View  all pictures</button>
                                </StyledLink>
                            </Button>
                        </div>
                    </Description>
                </Card>
                <Card>
                    <ImageDiv>
                        <ImageBackground>
                            <StyledLink to="/coming-soon">
                                VIEW ALL PHOTOS
                            </StyledLink>
                        </ImageBackground>
                        <Img fluid={workThirdImage.childImageSharp.fluid} />
                    </ImageDiv>
                    <Description>
                        <div>
                            <h3>Nairobi street feeding</h3>
                            <h2> January 12, 2019</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit.</p>
                            <Button>
                                <StyledLink to="/coming-soon">
                                    <button>View  all pictures</button>
                                </StyledLink>
                            </Button>
                        </div>
                    </Description>
                </Card>
            </Cards>
        </MainDIv>
    )
}

export default Work;