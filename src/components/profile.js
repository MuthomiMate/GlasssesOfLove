import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { SocialIcon } from 'react-social-icons';
import  { FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";
import { UseImages } from "./images"

const MainDiv = styled.div`
    background: #FFFFFF;
`
const TextDiv = styled.div`
    text-align: center;
    margin-top: 3rem;

    h3 {
        line-height: 69.888px;
        margin-bottom: .6em;
        font-size: 58.24px;
        font-weight: 600;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;
        text-rendering: optimizeLegibility;
        color: #00bfad;

        @media screen and (max-width: 420px) {
            font-size: 35px;
        }
    }
    p {
        font-size: 21.216px;
        font-weight: 400;
        line-height: 33.9456px;
        max-width: 42em;
        margin: 0 auto 1em;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;

        @media screen and (max-width: 420px) {
            font-size: 18px;
        }
    }
`
const CardsDiv = styled.div`
    margin: 2rem auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex: 0 1 32%;
    margin: 1rem 0;
    position: relative;

    @media screen and (max-width: 870px) {
        flex: 0 1 48%;
    }

    @media screen and (max-width: 500px) {
        flex: 0 1 98%;
    }
`
const InfoDiv = styled.div`
    margin: 0 1rem;
    font-style: normal;

    h5 {
        font-size: 33px;
        font-weight: 600;
        line-height: 45.136px;
        margin: 0;
    }

    h4 {
        font-size: 21px;
        line-height: 25px;
        font-weight: 400;
        margin: 0;
    }
`

const CardOverlay = styled.div`
    position: absolute;
    width: 100%;
    padding-top: 100%;
    display: none;
    background: #121B22;
    justify-content: center;
    transition: all 0.5s;
    color: #FFFFFF;
    z-index: 9;
    opacity: 0.8;

    p {
        text-align: center;
        font-size: 16px;
        font-family: MaisonNeue, HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-weight: 400;
        margin-bottom: 0;

        @media screen and (max-width: 1350px) {
            font-size: 14px;
        }
        @media screen and (max-width: 1125px) {
            font-size: 12px;
        }

        @media screen and (max-width: 930px) {
            font-size: 11px;
        }

        @media screen and (max-width: 870px) {
            font-size: 14px;
        }

        @media screen and (max-width: 680px) {
            font-size: 12px;
        }

        @media screen and (max-width: 610px) {
            font-size: 11px;
        }

        @media screen and (max-width: 590px) {
            font-size: 8px;
        }

        @media screen and (max-width: 500px) {
            font-size: 12px;
        }
    }

    ${Card}:hover & {
        display: flex;
    }
`
const Icons = styled.div`
    display: flex;
`

const Icon = styled.div`

`

const CardOverlayContent = styled.div`
    margin-top: -400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1350px) {
        margin-top: -350px;
    }


    @media screen and (max-width: 1100px) {
        margin-top: -270px;
    }

`

const Profile = () => {
    const { muthomiImage } = UseImages()
    return (
        <MainDiv>
            <TextDiv>
                <h3>Glasses of Love Team</h3>
                <p>Glasses of Love is an organization made up of volunteers. Every member of our team is socially focused, independent minded, and driven to make a positive social change in the community.</p>
            </TextDiv>
            <CardsDiv>
                <Card>
                    <div>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={muthomiImage.childImageSharp.fluid} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={muthomiImage.childImageSharp.fluid}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={muthomiImage.childImageSharp.fluid} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={muthomiImage.childImageSharp.fluid} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div>
                    <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={muthomiImage.childImageSharp.fluid} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan et odio eu pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. In aliquet nibh a urna pretium maximus. Ut sapien tellus, interdum vitae commodo eget, dapibus interdum dolor. Suspendisse quis purus eget lacus scelerisque porttitor. Nulla vehicula posuere massa nec interdum.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={muthomiImage.childImageSharp.fluid} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder</h4>
                    </InfoDiv>
                </Card>
            </CardsDiv>
        </MainDiv>
    )
}

export default Profile;