import React from "react";
import styled from "styled-components";
import  { FaTwitterSquare, FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare} from "react-icons/fa";
import logo from "../images/icon.png";
import SecondFooter from "./secondfooter";

const MainDiv = styled.div`
    background: #25407B;
    width: 100%;
    height: 22rem;

    @media screen and (max-width: 400px) {
        height: 37rem;
    }

    img {
        height: 5rem;
        width: 10.75rem;
        margin: auto 0;
      }
    h3 {
        font-weight: 600;
        color: #fff;
        padding: 0 2rem;
        text-decoration: none;
        transition: color .6s ease-in-out;

        &: hover {
            color: #00bfad;
        }
    }
`
const Section = styled.div`
    width: 60%;
    margin: auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1100px) {
        width: 80%;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
const Icons = styled.div`
    display: flex;
    flex-direction: row;

    h3 {
        font-weight: 400;
        padding: 0 .5rem;

        &:hover {
            color: #00bfad;
        }
    }

    a {
        text-decoration: none;
    }
`
const Footer = () => {
    return (
        <MainDiv>
            <Section>
                <div>
                    <div>
                        <a href="http://www.glassesoflove.or.ke">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div>
                        <h3>
                            Home
                        </h3>
                        <h3>
                            About
                        </h3>
                        <h3>
                            Blog
                        </h3>
                        <h3>
                            Contacts
                        </h3>
                    </div>
                </div>
                <div>
                    <h2>
                        Follow us
                    </h2>
                    <Icons>
                        <FaInstagramSquare
                            color="#00bfad"
                            size="2em"
                        />
                        <a href="https://www.instagram.com/glassesoflove" target="_blank">
                            <h3>Instagram</h3>
                        </a>
                    </Icons>
                    <Icons>
                        <FaTwitterSquare
                            color="#00bfad"
                            size="2em"
                        />
                        <a href="https://twitter.com/glassesoflove" target="_blank">
                            <h3>Twitter</h3>
                        </a>
                    </Icons>
                    <Icons>
                        <FaFacebookSquare
                            color="#00bfad"
                            size="2em"
                        />
                        <a href="https://www.facebook.com/glassesoflove/" target="_blank">
                            <h3>Facebook</h3>
                        </a>
                    </Icons>
                    <Icons>
                        <FaYoutubeSquare
                            color="#00bfad"
                            size="2em"
                        />
                        <a href="https://www.youtube.com/channel/UCf4tm8Ky22AE4PtASxM4s6w" target="_blank">
                            <h3>Youtube</h3>
                        </a>
                    </Icons>
                </div>
            </Section>
            <SecondFooter />
        </MainDiv>
    )
}


export default Footer;
