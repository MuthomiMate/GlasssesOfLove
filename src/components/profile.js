import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { SocialIcon } from 'react-social-icons';
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

    @media screen and (max-width: 332px) {
        justify-content: center;
    }
`
const Card = styled.div`
    flex: 0 1 18%;
    margin: 1rem 0;
    position: relative;

    @media screen and (max-width: 1500PX) {
        flex: 0 1 23%;
    }

    @media screen and (max-width: 870px) {
        flex: 0 1 32%;
    }

    @media screen and (max-width: 500px) {
        flex: 0 1 48%;
    }
    @media screen and (max-width: 332px) {
        flex: 0 1 80%;
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

    @media screen and (max-width: 1685px) {
        h5 {
            font-size: 25px;
        }
        h4 {
            font-size: 20px
        }
    }

    @media screen and (max-width: 1335px) {
        h5 {
            font-size: 14px;
        }
        h4 {
            font-size: 10px;
        }
    }


    @media screen and (max-width: 332px){
        h5 {
            font-size: 22px;
        }
        h4 {
            font-size: 18px;
        }
    }
`

const CardOverlay = styled.div`
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

    p {
        text-align: start;
        font-size: 12px;
        font-family: MaisonNeue, HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-weight: 400;
        margin-bottom: 0;
        margin-left: .3rem;

        @media screen and (max-width: 1350px) {
            font-size: 11px;
        }
        @media screen and (max-width: 1185px) {
            font-size: 9px;
        }

        @media screen and (max-width: 1010px) {
            font-size: 6px;
        }

        @media screen and (max-width: 870px) {
            font-size: 7px;
        }
    }

    ${Card}:hover & {
        display: flex;

        @media screen and (max-width: 700px) {
            display: none;
        }
    }
`
const Icons = styled.div`
    display: flex;
`

const CardOverlayContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Profile = () => {
    const { muthomiImage, koriImage, lamechImage, kimaniImage, lilianImage, austinImage, noImageGirl, noImageBoy, janeImage } = UseImages()
    return (
        <MainDiv>
            <TextDiv>
                <h3>Glasses of Love Team</h3>
                <p>Glasses of Love is an organization made up of volunteers. Every member of our team is socially focused, independent minded, and driven to make a positive social change in the community.</p>
            </TextDiv>
            <CardsDiv>
                <Card>
                    <div style={{position: "relative"}}>
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
                        <Img fluid={muthomiImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}} />
                    </div>
                    <InfoDiv>
                        <h5>Yvonne Makena</h5>
                        <h4>Founder/ChairPerson</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                            fluid={noImageGirl.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Joy Korir</h5>
                        <h4>Vice Chairperson</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                        <Img fluid={janeImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}/>
                    </div>
                    <InfoDiv>
                        <h5>Jane Wambui</h5>
                        <h4>Secretary</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                        <Img fluid={lilianImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}} />
                    </div>
                    <InfoDiv>
                        <h5>Lilian Wangui</h5>
                        <h4>Treasurer</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                        <Img fluid={noImageGirl.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}/>
                    </div>
                    <InfoDiv>
                        <h5>Nelly Nteere</h5>
                        <h4>Vice Treasurer</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                    <CardOverlay>
                            <CardOverlayContent>
                                <p>Witty, humorous, pensive but with a reserved and calm disposition, Dennis Kori is a practicing graphic designer and IT person. At present, he is the graphic designer and social media admin to Glasses of Love, a freelance content and technical writer and the co-founder of Allure Visuals Ltd.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={koriImage.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}/>
                    </div>
                    <InfoDiv>
                        <h5>Denis Kori</h5>
                        <h4>Media Leader</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Ian is a graduate Civil Engineer passionate about Engineering and Project Management. He seeks to create solutions to socioeconomic challenges facing the region, one through his technical contribution and two through direct involvement in charitable contributions.
                                Ian likes to cook in his free time.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img fluid={noImageBoy.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}} />
                    </div>
                    <InfoDiv>
                        <h5>Ian Mutwiri</h5>
                        <h4>Hospitality Leader</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                            fluid={noImageBoy.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Pascal Aloo</h5>
                        <h4>Partnership & Fundraising Leader</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>I am communication specialist who is particularly passionate about advocacy and fighting for better living conditions for the underserved communities. I love charity because its an opportunity to be a voice for the voiceless and a chance to provide service above once self.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={noImageGirl.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Gift Ogembo</h5>
                        <h4>Disciplinarian</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>I have always felt passionate about helping Kids who are in need because there are a gift from God and they are the most undeserving vulnerable people in our society. In spirit of charity and Lawyers social responsibility I will take any chance to support children.</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={austinImage.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Austin Munene</h5>
                        <h4>Legal Matters Leader</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                            fluid={noImageBoy.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Brian mwithiga</h5>
                        <h4>Event Coordinator</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>A lover of humanity, professionally and socially! I am human resource professional in pursuit of helping people get their dream jobs and have safe work spaces. Glasses of Love (GoL) has helped me extend this socially; showing that we can put our youth into good use to the society. My highlight has always been interacting with different people by availing ourselves for other people. This is one of the best ways I have and will continue utilizing my youth. Glasses of Love Rocks!!!</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={kimaniImage.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Nimrod Kimani</h5>
                        <h4>Event Coordinator</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>My joy is when you put a smile on another's face</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={noImageBoy.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Andrew Thuku</h5>
                        <h4>Committe Member</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
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
                            fluid={noImageGirl.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Irene Onyango</h5>
                        <h4>Committe Member</h4>
                    </InfoDiv>
                </Card>
                <Card>
                    <div style={{position: "relative"}}>
                        <CardOverlay>
                            <CardOverlayContent>
                                <p>Professionally I can say I'm a photographer, a videographer and a graphics designer...I doubt I know what a testimonial is apart from the testimonies I hear in church...Why I love charity? First of all, I love kids... and I'd hate to see anyone lack in life. Once you go through that route, you wouldn't want anyone else to go through the same</p>
                                <Icons>
                                    <SocialIcon network="twitter" fgColor="#ffffff" style={{height: 30, width: 30,  margin: ".2rem" }}/>
                                    <SocialIcon network="facebook" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                    <SocialIcon network="instagram" fgColor="#ffffff" style={{height: 30, width: 30, margin: ".2rem"}}/>
                                </Icons>
                            </CardOverlayContent>
                        </CardOverlay>
                        <Img
                            fluid={lamechImage.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" style={{height: '310px'}}
                        />
                    </div>
                    <InfoDiv>
                        <h5>Lamech Fukwo</h5>
                        <h4>Committe Member</h4>
                    </InfoDiv>
                </Card>
            </CardsDiv>
        </MainDiv>
    )
}

export default Profile;