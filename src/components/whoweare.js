import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #00BFAD;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #ffffff;

    @media screen and (max-width: 575px) {
        height: 40rem;
    }
    @media screen and (max-width: 500px) {
        height: 45rem;
    }
    @media screen and (max-width: 475px) {
        height: 50rem;
    }

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
        font-size: 15px;
        font-weight: 400;
        line-height: 33.9456px;
        max-width: 80em;
        margin: 0 auto 1em;
        font-family: proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif;

        @media screen and (max-width: 420px) {
            font-size: 18px;
        }
    }
    ul {
        list-style-type: lower-roman;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const TextDiv = styled.div`
    margin: auto;

    @media screen and (max-width: 420px) {
        height: 90%;
    }
`

const companyInfo = () => {
    return (
        <StyledDiv>
            <TextDiv>
                <h3>
                    Who We Are
                </h3>
                <p>
                Glasses of Love Foundation works towards bringing brightness to the children in the society through visiting them in homes, prisons, rehabilitation centers, hospitals, and schools to play, pray, donate, and generally spend time with them all over Kenya.
                </p>
                <p><em>Drive:</em> Caring about each other in the society hence the slogan: “Because We Care”</p>
                <p><em>Passion:</em> Young people with the heart of giving back to the society economically, spiritually and socially.</p>
                <p><em>Our Story:</em> The idea of giving back to the society was conceived in 2013 and our focus is to share love in three ways namely:</p>
                <ul>
                    <li>Charity visits</li>
                    <li>Donations</li>
                    <li>Mentorship</li>
                </ul>
                <p><em>Mission:</em> Create a community of friends aimed at giving back to the society.</p>
                <p><em>Vision:</em> Establish a culture of giving back to the society where people will have happy lives, poverty will be eradicated, and love made a life medication.</p>
                <p><em>Values</em></p>
                <ul>
                    <li>Integrity – We are honest in all group operations</li>
                    <li>Teamwork – We work together as a community of friends</li>
                    <li>Passion – We are driven by the heart of giving back to the society</li>
                    <li>Creativity – We invent ways of bringing brightness to lives</li>
                    <li>Consistency – We always have the heart of giving back to the society</li>
                </ul>
            </TextDiv>
        </StyledDiv>
    )
}

export default companyInfo;